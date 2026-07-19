import * as vscode from 'vscode';
import {
  toAdaCase,
  toCamelCase,
  toConstantCase,
  toKebabCase,
  toLowerCase,
  toPascalCase,
  toScreamingCase,
  toSnakeCase,
  toTitleCase,
  toUpperCase,
} from './utils';

type CaseConverter = (word: string) => string;

async function renameToCase(converter: CaseConverter) {
  const editor = vscode.window.activeTextEditor;
  if (!editor) {
    return;
  }

  const position = editor.selection.active;
  const wordRange = editor.document.getWordRangeAtPosition(position);
  const word = editor.document.getText(wordRange);

  const newName = converter(word);

  const edit = await vscode.commands.executeCommand<vscode.WorkspaceEdit>(
    'vscode.executeDocumentRenameProvider',
    editor.document.uri,
    position,
    newName,
  );

  if (edit) {
    await vscode.workspace.applyEdit(edit);
  }
}

export function activate(context: vscode.ExtensionContext) {
  const commandNameCase: { [id: string]: CaseConverter } = {
    'symbol-case-renamer.renameToCamelCase': toCamelCase,
    'symbol-case-renamer.renameToKebabCase': toKebabCase,
    'symbol-case-renamer.renameToLowerCase': toLowerCase,
    'symbol-case-renamer.renameToPascalCase': toPascalCase,
    'symbol-case-renamer.renameToScreamingCase': toScreamingCase,
    'symbol-case-renamer.renameToConstantCase': toConstantCase,
    'symbol-case-renamer.renameToSnakeCase': toSnakeCase,
    'symbol-case-renamer.renameToTitleCase': toTitleCase,
    'symbol-case-renamer.renameToUpperCase': toUpperCase,
    'symbol-case-renamer.renameToAdaCase': toAdaCase,
  };

  const disposables = Object.entries(commandNameCase).map(
    ([command, converter]) =>
      vscode.commands.registerCommand(command, () => renameToCase(converter)),
  );

  context.subscriptions.push(...disposables);
}

export function deactivate() {}
