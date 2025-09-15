import { Checkbox } from "primereact/checkbox";
import "./ProgramSelector.scss";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { useState } from "react";
import { FileUpload } from "primereact/fileupload";

export function ProgramSelector({
  programs,
  setProgram,
  resetPrograms,
}: {
  programs: { name: string; checked: boolean; disabled: boolean }[];
  setProgram: (program: string, state: boolean) => void;
  resetPrograms: () => void;
}) {
  const [filter, setFilter] = useState("");
  const [loadingFile, setLoadingFile] = useState(false);

  return (
    <div className="program-selector">
      <div className="program-selector-buttons">
        <Button
          label="Select All"
          onClick={() => {
            programs
              .filter((p) => !p.disabled)
              .forEach((program) => {
                setProgram(program.name, true);
              });
          }}
        />
        <Button
          label="Clear All"
          onClick={() => {
            programs
              .filter((p) => !p.disabled)
              .forEach((program) => {
                setProgram(program.name, false);
              });
          }}
        />
        <Button label="Reset to default" onClick={resetPrograms} />
      </div>
      <InputText
        type="text"
        placeholder="Filter Programs"
        onChange={(e) => setFilter(e.target.value)}
      />
      <div className="programs-grid">
        {programs
          .filter((p) => p.name.includes(filter))
          .map((program) => (
            <div className="program-selector-div" key={program.name}>
              <Checkbox
                inputId={program.name}
                name={program.name}
                value={program.name}
                onChange={() => setProgram(program.name, !program.checked)}
                checked={program.checked}
                disabled={program.disabled}
              />
              <label
                htmlFor={program.name}
                className={program.disabled ? "disabled" : ""}
              >
                {program.name}
              </label>
            </div>
          ))}
      </div>
    </div>
  );
}
