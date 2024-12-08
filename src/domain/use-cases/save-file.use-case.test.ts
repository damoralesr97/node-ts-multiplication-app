import { SaveFile, Options } from "./save-file.use-case";
import fs from "fs";

describe("SaveFileUseCase", () => {
  const customOptions: Options = {
    fileContent: "custom content",
    fileDestination: "custom-outputs",
    fileName: "custom-table-name",
  };
  const customFilePath = `${customOptions.fileDestination}/${customOptions.fileName}.txt`;
  afterEach(() => {
    const outputFolderExists = fs.existsSync("outputs");
    if (outputFolderExists) fs.rmSync("outputs", { recursive: true });

    const customOutputFolderExists = fs.existsSync(
      customOptions.fileDestination!
    );
    if (customOutputFolderExists)
      fs.rmSync(customOptions.fileDestination!, { recursive: true });
  });
  test("should save file with default values", () => {
    const saveFile = new SaveFile();
    const filePath = "outputs/table.txt";
    const options: Options = {
      fileContent: "test content",
    };
    const result = saveFile.execute(options);

    const checkFile = fs.existsSync(filePath);
    const fileContent = fs.readFileSync(filePath, {
      encoding: "utf-8",
    });

    expect(result).toBeTruthy();
    expect(checkFile).toBeTruthy();
    expect(fileContent).toBe(options.fileContent);
  });
  test("should save file with custom values", () => {
    const saveFile = new SaveFile();

    const result = saveFile.execute(customOptions);
    const fileExist = fs.existsSync(customFilePath);
    const fileContent = fs.readFileSync(customFilePath, { encoding: "utf-8" });

    expect(result).toBeTruthy();
    expect(fileExist).toBeTruthy();
    expect(fileContent).toBe(customOptions.fileContent);
  });
  test("should return false if directory could not be created", () => {
    const saveFile = new SaveFile();
    const mkdirSpy = jest.spyOn(fs, "mkdirSync").mockImplementation(() => {
      throw new Error("This is a custom error message for testing");
    });
    const result = saveFile.execute(customOptions);

    expect(result).toBeFalsy();

    mkdirSpy.mockRestore();
  });
  test("should return false if file could not be created", () => {
    const saveFile = new SaveFile();
    const writeFileSpy = jest
      .spyOn(fs, "writeFileSync")
      .mockImplementation(() => {
        throw new Error("This is a custom error message for testing");
      });
    const result = saveFile.execute(customOptions);

    expect(result).toBeFalsy();

    writeFileSpy.mockRestore();
  });
});