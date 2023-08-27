import { HourBlock } from "@prisma/client";
import {
  redirect,
  type ActionArgs,
  type V2_MetaFunction,
  LoaderArgs,
  json,
} from "@remix-run/node";
import { Form, useLoaderData, useSubmit } from "@remix-run/react";
import { useRef } from "react";
import invariant from "tiny-invariant";
import {
  createDailyEntry,
  getDailyEntry,
  getHourBlock,
  hourBlockData,
  updateHourBlock,
} from "~/models/dailyEntry.server";
import { requireUser } from "~/session.server";

export const meta: V2_MetaFunction = () => [{ title: "168 Hours Online" }];

interface HoursMap {
  [key: number]: Pick<HourBlock, "activityName" | "tags">;
}

export const loader = async ({ request }: LoaderArgs) => {
  const user = await requireUser(request);
  let dailyEntry = await getDailyEntry(user.id);
  if (!dailyEntry) {
    dailyEntry = await createDailyEntry(user.id);
  }
  return json({ dailyEntry });
};

export const action = async ({ request }: ActionArgs) => {
  const data = await request.formData();
  const user = await requireUser(request);
  const hoursMap = {} as HoursMap;
  hourBlockData.forEach(async (blockNumber) => {
    const activityName = data.get(`activity_${blockNumber}`) as string;
    const tags = data.get(`tag_${blockNumber}`) as string;

    if (activityName !== "") {
      const block = await getHourBlock(blockNumber, user.id);
      const hourBlock = { activityName, tags, blockNumber };
      invariant(block, "Block not found");
      await updateHourBlock(block.id, hourBlock);
    }
  });

  console.log(hoursMap);

  return redirect("/");
};

export default function Index() {
  const { dailyEntry } = useLoaderData<typeof loader>();
  const form = useRef(null);
  const submit = useSubmit();

  const submitForm = () => {
    submit(form.current);
  };

  // const copyFromPreviousValue = (index: number) => {
  //   const previousBlock = dailyEntry.hourBlocks[index - 1];
  //   if (previousBlock) {
  //     const activityName = previousBlock.activityName;
  //     const tags = previousBlock.tags;
  //     const blockNumber = dailyEntry.hourBlocks[index].blockNumber;
  //     const hourBlock = { activityName, tags, blockNumber };
  //     updateHourBlock(previousBlock.id, hourBlock);
  //   }
  // };

  const fiveAm = 300;
  const fiveAmIndex = dailyEntry.hourBlocks.findIndex(
    (block) => block.blockNumber === fiveAm,
  );
  const hoursPastFiveAm = dailyEntry.hourBlocks.slice(fiveAmIndex);
  const hoursBeforeFiveAm = dailyEntry.hourBlocks.slice(0, fiveAmIndex - 1);
  const sortedHours = [...hoursPastFiveAm, ...hoursBeforeFiveAm];

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">
            168 Hours Timesheet Tracker
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            Track your time. This is an alternative to the 168 hours spreadsheet
          </p>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle">
            <table className="w-full border-separate border-spacing-0 table-fixed">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="sticky top-0 z-10 w-1/5 border-b border-gray-300 bg-white bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8"
                  >
                    Hour
                  </th>
                  <th
                    scope="col"
                    className="sticky top-0 z-10 w-1/5 border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter"
                  >
                    Activity
                  </th>
                  <th
                    scope="col"
                    className="sticky top-0 z-10 w-1/5  border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter"
                  >
                    Tags
                  </th>
                  <th
                    scope="col"
                    className="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 py-3.5 pl-3 pr-4 backdrop-blur backdrop-filter sm:pr-6 lg:pr-8"
                  >
                    <button
                      type="submit"
                      className="text-indigo-600 hover:text-indigo-900"
                      onClick={() => submitForm()}
                    >
                      Save
                    </button>
                  </th>
                </tr>
              </thead>
              <tbody>
                {sortedHours.map((block, index) => (
                  <tr key={block.id}>
                    <td className="whitespace-nowrap  w-1/5 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8">
                      {`${Math.floor(block.blockNumber / 60)}h${
                        block.blockNumber % 60 > 0 ? block.blockNumber % 60 : ""
                      }`}
                    </td>
                    <td className="whitespace-nowrap  w-1/5 px-3 py-4 text-sm text-gray-500 table-cell">
                      <input
                        type="text"
                        name={`activity_${block.blockNumber}`}
                        placeholder="Activity"
                        form="time_form"
                        className="w-full"
                        defaultValue={block.activityName || ""}
                        required
                      ></input>
                    </td>
                    <td className="whitespace-nowrap  w-1/5 px-3 py-4 text-sm text-gray-500">
                      <input
                        type="text"
                        name={`tag_${block.blockNumber}`}
                        placeholder="Tag"
                        form="time_form"
                        className="w-full"
                        defaultValue={block.tags || ""}
                      ></input>
                    </td>
                    <td className="relative whitespace-nowrap w-1/5 py-4 pr-4 pl-3 text-right text-sm font-medium sm:pr-8 lg:pr-8">
                      {/* <button
                        type="submit"
                        className="text-indigo-600 hover:text-indigo-900"
                        onClick={() => copyFromPreviousValue(index)}
                      >
                        Copy from previous
                      </button> */}
                    </td>
                  </tr>
                ))}
                <Form ref={form} id="time_form" method="post"></Form>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
