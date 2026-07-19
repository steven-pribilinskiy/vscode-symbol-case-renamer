import * as assert from 'node:assert';

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
} from '../utils';

suite('Extension Test Suite', () => {
  vscode.window.showInformationMessage('Start all tests.');

  test('renameToCamelCase', async () => {
    const editor = await vscode.window.activeTextEditor;
    if (!editor) {
      return;
    }

    const selection = editor.selection;
    const originalText = editor.document.getText(selection);

    await vscode.commands.executeCommand(
      'symbol-case-renamer.renameToCamelCase',
    );

    const newText = editor.document.getText(selection);
    assert.strictEqual(newText, toCamelCase(originalText));
  });

  test('renameToKebabCase', async () => {
    const editor = await vscode.window.activeTextEditor;
    if (!editor) {
      return;
    }

    const selection = editor.selection;
    const originalText = editor.document.getText(selection);

    await vscode.commands.executeCommand(
      'symbol-case-renamer.renameToKebabCase',
    );

    const newText = editor.document.getText(selection);
    assert.strictEqual(newText, toKebabCase(originalText));
  });

  test('renameToPascalCase', async () => {
    const editor = await vscode.window.activeTextEditor;
    if (!editor) {
      return;
    }

    const selection = editor.selection;
    const originalText = editor.document.getText(selection);

    await vscode.commands.executeCommand(
      'symbol-case-renamer.renameToPascalCase',
    );

    const newText = editor.document.getText(selection);
    assert.strictEqual(newText, toPascalCase(originalText));
  });

  test('renameToScreamingCase', async () => {
    const editor = await vscode.window.activeTextEditor;
    if (!editor) {
      return;
    }

    const selection = editor.selection;
    const originalText = editor.document.getText(selection);

    await vscode.commands.executeCommand(
      'symbol-case-renamer.renameToScreamingCase',
    );

    const newText = editor.document.getText(selection);
    assert.strictEqual(newText, toScreamingCase(originalText));
  });

  test('renameToConstantCase', async () => {
    const editor = await vscode.window.activeTextEditor;
    if (!editor) {
      return;
    }

    const selection = editor.selection;
    const originalText = editor.document.getText(selection);

    await vscode.commands.executeCommand(
      'symbol-case-renamer.renameToConstantCase',
    );

    const newText = editor.document.getText(selection);
    assert.strictEqual(newText, toConstantCase(originalText));
  });

  test('renameToSnakeCase', async () => {
    const editor = await vscode.window.activeTextEditor;
    if (!editor) {
      return;
    }

    const selection = editor.selection;
    const originalText = editor.document.getText(selection);

    await vscode.commands.executeCommand(
      'symbol-case-renamer.renameToSnakeCase',
    );

    const newText = editor.document.getText(selection);
    assert.strictEqual(newText, toSnakeCase(originalText));
  });

  test('renameToTitleCase', async () => {
    const editor = await vscode.window.activeTextEditor;
    if (!editor) {
      return;
    }

    const selection = editor.selection;
    const originalText = editor.document.getText(selection);

    await vscode.commands.executeCommand(
      'symbol-case-renamer.renameToTitleCase',
    );

    const newText = editor.document.getText(selection);
    assert.strictEqual(newText, toTitleCase(originalText));
  });

  test('renameToLowercase', async () => {
    const editor = await vscode.window.activeTextEditor;
    if (!editor) {
      return;
    }

    const selection = editor.selection;
    const originalText = editor.document.getText(selection);

    await vscode.commands.executeCommand(
      'symbol-case-renamer.renameToLowercase',
    );

    const newText = editor.document.getText(selection);
    assert.strictEqual(newText, toLowerCase(originalText));
  });

  test('renameToUppercase', async () => {
    const editor = await vscode.window.activeTextEditor;
    if (!editor) {
      return;
    }

    const selection = editor.selection;
    const originalText = editor.document.getText(selection);

    await vscode.commands.executeCommand(
      'symbol-case-renamer.renameToUppercase',
    );

    const newText = editor.document.getText(selection);
    assert.strictEqual(newText, toUpperCase(originalText));
  });

  test('renameToAdacase', async () => {
    const editor = await vscode.window.activeTextEditor;
    if (!editor) {
      return;
    }

    const selection = editor.selection;
    const originalText = editor.document.getText(selection);

    await vscode.commands.executeCommand('symbol-case-renamer.renameToAdacase');

    const newText = editor.document.getText(selection);
    assert.strictEqual(newText, toAdaCase(originalText));
  });
});
