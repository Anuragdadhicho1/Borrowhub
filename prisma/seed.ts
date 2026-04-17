import 'dotenv/config';
import bcrypt from 'bcryptjs';
import { PrismaClient, UserRole } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const passwordHash = await bcrypt.hash('admin1234', 12);

  await prisma.user.upsert({
    where: { email: 'admin@borrowhub.local' },
    update: { name: 'Borrowhub Admin', role: UserRole.ADMIN, passwordHash },
    create: {
      name: 'Borrowhub Admin',
      email: 'admin@borrowhub.local',
      role: UserRole.ADMIN,
      passwordHash
    }
  });

  const userPassword = await bcrypt.hash('user12345', 12);
  await prisma.user.upsert({
    where: { email: 'user@borrowhub.local' },
    update: { name: 'Borrowhub User', role: UserRole.USER, passwordHash: userPassword },
    create: {
      name: 'Borrowhub User',
      email: 'user@borrowhub.local',
      role: UserRole.USER,
      passwordHash: userPassword
    }
  });

  const listingCount = await prisma.listing.count();
  if (listingCount === 0) {
    await prisma.listing.createMany({
      data: [
        {
          title: 'Laptop - Dell XPS',
          description: 'High performance laptop for temporary team use',
          availableQuantity: 2
        },
        {
          title: 'Projector',
          description: '1080p meeting room projector',
          availableQuantity: 1
        },
        {
          title: 'Camera Kit',
          description: 'Mirrorless camera with tripod and mic',
          availableQuantity: 1
        }
      ]
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
