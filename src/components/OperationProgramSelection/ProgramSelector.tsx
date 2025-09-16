import { Checkbox } from "primereact/checkbox";
import "./ProgramSelector.scss";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { useState } from "react";

export function ProgramSelector({
  programs,
  setProgram,
  resetPrograms,
}: {
  programs: { label: string; id: string; checked: boolean; disabled: boolean }[];
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
                setProgram(program.id, true);
              });
          }}
        />
        <Button
          label="Clear All"
          onClick={() => {
            programs
              .filter((p) => !p.disabled)
              .forEach((program) => {
                setProgram(program.id, false);
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
          .filter((p) => p.label.includes(filter))
          .map((program) => (
            <div className="program-selector-div" key={program.id}>
              <Checkbox
                inputId={program.id}
                name={program.id}
                value={program.id}
                onChange={() => setProgram(program.id, !program.checked)}
                checked={program.checked}
                disabled={program.disabled}
              />
              <label
                htmlFor={program.id}
                className={program.disabled ? "disabled" : ""}
              >
                {program.label}
              </label>
            </div>
          ))}
      </div>
    </div>
  );
}
