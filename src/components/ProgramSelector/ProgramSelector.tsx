import { Checkbox } from "primereact/checkbox";
import "./ProgramSelector.scss";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { useState } from "react";
import { FileUpload } from "primereact/fileupload";
import { SelectButton } from "primereact/selectbutton";
import { SEMESTER_OPTIONS } from "./ProgramList";

export function ProgramSelector({
  programs,
  setProgram,
  setProgramList,
  resetPrograms,
}: {
  programs: { name: string; checked: boolean; disabled: boolean }[];
  setProgram: (program: string, state: boolean) => void;
  setProgramList: (list: string[]) => void;
  resetPrograms: () => void;
}) {
  const [gnFilter, setGnFilter] = useState("");
  const [gsFilter, setGsFilter] = useState("");
  const [loadingFile, setLoadingFile] = useState(false);

  const [gnSemesterValue, setGnSemesterValue] = useState("2018B");
  const [gsSemesterValue, setGsSemesterValue] = useState("2018B");

  async function fileUpload(event: any) {
    setLoadingFile(true);
    const file = event.files[0];
    const reader = new FileReader();
    let blob = await fetch(file.objectURL).then((r) => r.blob());
    reader.readAsText(blob);

    reader.onloadend = function () {
      const text = reader.result;
      const list = (text as string).split("\n").filter((e) => e);
      setProgramList(list);
      setLoadingFile(false);
    };
  }

  const semesterTemplate = (option: typeof SEMESTER_OPTIONS[0]) => {
    return <span>{option.value}</span>;
  };

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
        <FileUpload
          className="file-upload"
          mode="basic"
          accept="text/*"
          maxFileSize={1000000}
          onUpload={() => {}}
          onSelect={fileUpload}
          chooseLabel="Load from file"
        />
      </div>
      <div className="program-columns">
        <div className="program-selector-column">
          <h3>Gemini North</h3>
          <div className="semester-select-buttons">
            <SelectButton
              value={gnSemesterValue}
              onChange={(e) => setGnSemesterValue(e.value)}
              itemTemplate={semesterTemplate}
              optionLabel="value"
              options={SEMESTER_OPTIONS}
            />
          </div>
          <InputText
            type="text"
            placeholder="Filter Programs"
            onChange={(e) => setGnFilter(e.target.value)}
          />
          <div className="program-selector-buttons">
            <Button
              label="Select all filtered"
              onClick={() => {
                programs
                  .filter(
                    (p) =>
                      p.name.startsWith("GN") &&
                      p.name.includes(gnFilter) &&
                      p.name.includes(gnSemesterValue) &&
                      !p.disabled
                  )
                  .forEach((program) => {
                    setProgram(program.name, true);
                  });
              }}
            />
            <Button
              label="Clear all filtered"
              onClick={() => {
                programs
                  .filter(
                    (p) =>
                      p.name.startsWith("GN") &&
                      p.name.includes(gnFilter) &&
                      p.name.includes(gnSemesterValue) &&
                      !p.disabled
                  )
                  .forEach((program) => {
                    setProgram(program.name, false);
                  });
              }}
            />
          </div>
          <div className="programs-grid">
            {programs
              .filter(
                (p) =>
                  p.name.startsWith("GN") &&
                  p.name.includes(gnFilter) &&
                  p.name.includes(gnSemesterValue)
              )
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
                    {program.name.replace(`GN-${gnSemesterValue}-`, "")}
                  </label>
                </div>
              ))}
          </div>
        </div>
        <div className="program-selector-column">
          <h3>Gemini South</h3>
          <div className="semester-select-buttons">
            <SelectButton
              value={gsSemesterValue}
              onChange={(e) => setGsSemesterValue(e.value)}
              itemTemplate={semesterTemplate}
              optionLabel="value"
              options={SEMESTER_OPTIONS}
            />
          </div>
          <InputText
            type="text"
            placeholder="Filter Programs"
            onChange={(e) => setGsFilter(e.target.value)}
          />
          <div className="program-selector-buttons">
            <Button
              label="Select all filtered"
              onClick={() => {
                programs
                  .filter(
                    (p) =>
                      p.name.startsWith("GS") &&
                      p.name.includes(gsFilter) &&
                      p.name.includes(gsSemesterValue) &&
                      !p.disabled
                  )
                  .forEach((program) => {
                    setProgram(program.name, true);
                  });
              }}
            />
            <Button
              label="Clear all filtered"
              onClick={() => {
                programs
                  .filter(
                    (p) =>
                      p.name.startsWith("GS") &&
                      p.name.includes(gsFilter) &&
                      p.name.includes(gsSemesterValue) &&
                      !p.disabled
                  )
                  .forEach((program) => {
                    setProgram(program.name, false);
                  });
              }}
            />
          </div>
          <div className="programs-grid">
            {programs
              .filter(
                (p) =>
                  p.name.startsWith("GS") &&
                  p.name.includes(gsFilter) &&
                  p.name.includes(gsSemesterValue)
              )
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
                    {program.name.replace(`GS-${gsSemesterValue}-`, "")}
                  </label>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
