import { DeletePerscription, UpdatePerscription } from './buttons'


export default async function Table() {
    return (
      <div className="mt-6 flow-root">
        <div className="inline-block min-w-full align-middle">
          <div className="rounded-lg bg-gray-100 p-2 md:pt-0">
            <div className="md:hidden">
                <div
                  className="mb-2 w-full rounded-md bg-white p-4"
                >
                  <div className="flex items-center justify-between border-b pb-4">
                    <div>
                      <div className="mb-2 flex items-center">
                        <p>Date de creation</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex w-full items-center justify-between pt-4">
                    <div>
                      <p className="text-xl font-medium">
                      </p>
                      <p>Patient</p>
                    </div>
                    <div className="flex justify-end gap-2">
                      <UpdatePerscription refrence='001'/>
                      <DeletePerscription refrence='001'/>
                    </div>
                  </div>
                </div>
            </div>
            <table className="hidden min-w-full text-gray-900 md:table">
              <thead className="rounded-lg text-left text-sm font-normal">
                <tr>
                  <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                    Date de creation
                  </th>
                  <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                    Patient
                  </th>
                  <th scope="col" className="relative py-3 pl-6 pr-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                  <tr
                    className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
                    <td className="whitespace-nowrap py-3 pl-6 pr-3">
                      <div className="flex items-center gap-3">
                        
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      
                    </td>
                    <td className="flex justify-end gap-2 whitespace-nowrap px-6 py-4 text-sm">
                    <div className="flex justify-end gap-3">
                    </div>
                    </td>
                  </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }