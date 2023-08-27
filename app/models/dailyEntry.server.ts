import { prisma } from "~/db.server";
import type { HourBlock } from "@prisma/client";

const minutesIncrements = 15;
const minutesInADay = 1440;
const hourBlocksLength = minutesInADay / minutesIncrements;
export const hourBlockData = [
  ...Array(Math.floor(hourBlocksLength) + 1).keys(),
].map((i) => i * minutesIncrements);

export const createDailyEntry = async (userId: string) => {
  const dailyEntry = await prisma.dailyEntry.create({
    data: {
      userId: userId,
    },
    include: { hourBlocks: true },
  });
  hourBlockData.forEach(async (blockNumber) => {
    await prisma.hourBlock.create({
      data: {
        blockNumber,
        dailyEntryId: dailyEntry.id,
      },
    });
  });
  return dailyEntry;
};

export const getHourBlock = async (blockNumber: number, userId: string) => {
  const today = new Date();
  const hourBlock = await prisma.hourBlock.findFirst({
    where: {
      blockNumber,
      dailyEntry: {
        userId,
        createdAt: {
          gte: new Date(today.getFullYear(), today.getMonth(), today.getDate()),
          lt: new Date(
            today.getFullYear(),
            today.getMonth(),
            today.getDate() + 1,
          ),
        },
      },
    },
  });
  return hourBlock;
};

export const getDailyEntry = async (userId: string) => {
  const today = new Date();
  const dailyEntry = await prisma.dailyEntry.findFirst({
    where: {
      userId,
      createdAt: {
        gte: new Date(today.getFullYear(), today.getMonth(), today.getDate()),
        lt: new Date(
          today.getFullYear(),
          today.getMonth(),
          today.getDate() + 1,
        ),
      },
    },
    include: {
      hourBlocks: true,
    },
  });
  return dailyEntry;
};

export const createHourBlock = async (
  dailyEntryId: string,
  hourBlocks: Pick<HourBlock, "blockNumber" | "tags" | "activityName">,
) => {
  const block = await prisma.hourBlock.create({
    data: {
      dailyEntryId,
      ...hourBlocks,
    },
  });
  return block;
};

export const updateHourBlock = async (
  id: HourBlock["id"],
  hourBlocks: Pick<HourBlock, "blockNumber" | "tags" | "activityName">,
) => {
  const updatedHourBlock = await prisma.hourBlock.update({
    where: { id },
    data: hourBlocks,
  });
  return updatedHourBlock;
};
