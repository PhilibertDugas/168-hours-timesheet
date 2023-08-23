import {
  redirect,
  type ActionArgs,
  type V2_MetaFunction,
} from "@remix-run/node";
import { Form, useSubmit } from "@remix-run/react";
import { useRef } from "react";
import invariant from "tiny-invariant";

import { useOptionalUser } from "~/utils";

export const meta: V2_MetaFunction = () => [{ title: "168 Hours Online" }];

const hourBlocks = [
  "5h00",
  "5h30",
  "6h00",
  "6h30",
  "7h00",
  "7h30",
  "8h00",
  "8h30",
  "9h00",
  "9h30",
  "10h00",
  "10h30",
  "11h00",
  "11h30",
  "12h00",
  "12h30",
  "13h00",
  "13h30",
  "14h00",
  "14h30",
  "15h00",
  "15h30",
  "16h00",
  "17h30",
  "18h00",
  "18h30",
  "19h00",
  "19h30",
  "20h00",
  "20h30",
  "21h00",
  "21h30",
  "22h00",
  "22h30",
  "23h00",
  "23h30",
  "0h00",
  "0h30",
  "1h00",
  "1h30",
  "2h00",
  "2h30",
  "3h00",
  "3h30",
  "4h00",
  "4h30",
];

interface HourBlock {
  activity: string;
  minutes: number;
  tag?: string;
}

interface HoursMap {
  [key: string]: HourBlock;
}

export const action = async ({ request }: ActionArgs) => {
  const data = await request.formData();
  const hoursMap = {} as HoursMap;
  hourBlocks.forEach((block) => {
    const activity = data.get(`activity_${block}`) as string;
    const minutes = data.get(`minutes_${block}`) as string;
    const tag = data.get(`tag_${block}`) as string;

    if (activity !== "" && +minutes != 0) {
      hoursMap[block] = { activity, minutes: +minutes, tag };
    }
  });
  console.log(hoursMap);

  return redirect("/");
};

export default function Index() {
  const user = useOptionalUser();
  const form = useRef(null);
  const submit = useSubmit();

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
                    className="sticky top-0 z-10 w-1/5 border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter"
                  >
                    Minutes
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
                    <span className="sr-only">Save</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {hourBlocks.map((block) => (
                  <tr key={block}>
                    <td className="whitespace-nowrap  w-1/5 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8">
                      {block}
                    </td>
                    <td className="whitespace-nowrap  w-1/5 px-3 py-4 text-sm text-gray-500 table-cell">
                      <input
                        type="text"
                        name={`activity_${block}`}
                        placeholder="Activity"
                        form="time_form"
                        className="w-full"
                        required
                      ></input>
                    </td>
                    <td className="whitespace-nowrap  w-1/5 px-3 py-4 text-sm text-gray-500 table-cell">
                      <input
                        type="number"
                        name={`minutes_${block}`}
                        placeholder="0"
                        form="time_form"
                        className="w-full"
                        required
                      ></input>
                    </td>
                    <td className="whitespace-nowrap  w-1/5 px-3 py-4 text-sm text-gray-500">
                      <input
                        type="text"
                        name={`tag_${block}`}
                        placeholder="Tag"
                        form="time_form"
                        className="w-full"
                      ></input>
                    </td>
                    <td className="relative whitespace-nowrap w-1/5 py-4 pr-4 pl-3 text-right text-sm font-medium sm:pr-8 lg:pr-8">
                      <button
                        type="submit"
                        className="text-indigo-600 hover:text-indigo-900"
                        onClick={() => submit(form.current)}
                      >
                        Save
                      </button>
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
