import React from "react";

export const ClientCreationHearingItem = ({ fields, handleFieldChange }: any) => {
  return (
    <React.Fragment>
      {fields.map((field: any, index: number) => (
        <div key={index} className="grid grid-cols-3 items-center w-[700px]">
          <p className="w-fit whitespace-nowrap col-span-1">{field.label}</p>
          {(() => {
            switch (field.type) {
              case "text":
                return (
                  <input
                    type="text"
                    className="bg-gray-200 rounded-sm p-2 w-full col-span-2"
                    value={field.value || ""}
                    onChange={(event) => handleFieldChange(index, event)}
                  />
                );
              case "select":
                return (
                  <select
                    className="bg-gray-200 rounded-sm p-2 w-full col-span-2"
                    value={field.value || ""}
                    onChange={(event) => handleFieldChange(index, event)}
                  >
                    <option value="">選択してください</option>
                    {field.options?.map((option, optionIndex) => (
                      <option key={optionIndex} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                );
              case "url":
                return (
                  <input
                    type="url"
                    className="bg-gray-200 rounded-sm p-2 w-full col-span-2"
                    value={field.value || ""}
                    onChange={(event) => handleFieldChange(index, event)}
                  />
                );
              case "number":
                return (
                  <input
                    type="number"
                    className="bg-gray-200 rounded-sm p-2 w-full col-span-2"
                    value={field.value || ""}
                    onChange={(event) => handleFieldChange(index, event)}
                  />
                );
              default:
                return null;
            }
          })()}
        </div>
      ))}
    </React.Fragment>
  );
};
