import * as assert from 'node:assert';
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

suite('Utils Test Suite', () => {
  test('toCamelCase', () => {
    assert.strictEqual(toCamelCase('helloWorld'), 'helloWorld');
    assert.strictEqual(toCamelCase('HELLO_WORLD'), 'helloWorld');
    assert.strictEqual(toCamelCase('hello-world'), 'helloWorld');
  });

  test('toKebabCase', () => {
    assert.strictEqual(toKebabCase('hello_world'), 'hello-world');
    assert.strictEqual(toKebabCase('HELLO_WORLD'), 'hello-world');
    assert.strictEqual(toKebabCase('helloWorld'), 'hello-world');
  });

  test('toLowerCase', () => {
    assert.strictEqual(toLowerCase('HELLO_WORLD'), 'hello_world');
    assert.strictEqual(toLowerCase('HelloWorld'), 'helloworld');
  });

  test('toPascalCase', () => {
    assert.strictEqual(toPascalCase('helloWorld'), 'HelloWorld');
    assert.strictEqual(toPascalCase('HELLO_WORLD'), 'HelloWorld');
    assert.strictEqual(toPascalCase('hello-world'), 'HelloWorld');
  });

  test('toScreamingCase', () => {
    assert.strictEqual(toScreamingCase('helloWorld'), 'HELLO_WORLD');
    assert.strictEqual(toScreamingCase('hello_world'), 'HELLO_WORLD');
    assert.strictEqual(toScreamingCase('hello-world'), 'HELLO_WORLD');
    assert.strictEqual(toScreamingCase('HelloWorld'), 'HELLO_WORLD');
  });

  test('toConstantCase', () => {
    assert.strictEqual(toConstantCase('helloWorld'), 'HELLO_WORLD');
    assert.strictEqual(toConstantCase('hello_world'), 'HELLO_WORLD');
    assert.strictEqual(toConstantCase('hello-world'), 'HELLO_WORLD');
    assert.strictEqual(toConstantCase('HelloWorld'), 'HELLO_WORLD');
  });

  test('toSnakeCase', () => {
    assert.strictEqual(toSnakeCase('helloWorld'), 'hello_world');
    assert.strictEqual(toSnakeCase('hello_world'), 'hello_world');
    assert.strictEqual(toSnakeCase('hello-world'), 'hello_world');
    assert.strictEqual(toSnakeCase('HelloWorld'), 'hello_world');
  });

  test('toTitleCase', () => {
    assert.strictEqual(toTitleCase('helloWorld'), 'HelloWorld');
    assert.strictEqual(toTitleCase('hello_world'), 'HelloWorld');
    assert.strictEqual(toTitleCase('hello-world'), 'HelloWorld');
    assert.strictEqual(toTitleCase('HelloWorld'), 'HelloWorld');
  });

  test('toUpperCase', () => {
    assert.strictEqual(toUpperCase('hello_world'), 'HELLO_WORLD');
    assert.strictEqual(toUpperCase('HelloWorld'), 'HELLOWORLD');
  });

  test('toAdaCase', () => {
    assert.strictEqual(toAdaCase('hello_world'), 'Hello_World');
    assert.strictEqual(toAdaCase('hello-world'), 'Hello_World');
    assert.strictEqual(toAdaCase('hello world'), 'Hello_World');

    assert.strictEqual(toAdaCase('helloWorld'), 'Hello_World');
    assert.strictEqual(toAdaCase('HelloWorld'), 'Hello_World');

    assert.strictEqual(toAdaCase('XMLHttpRequest'), 'Xml_Http_Request');
    assert.strictEqual(toAdaCase('HTTPServer'), 'Http_Server');
    assert.strictEqual(toAdaCase('userID'), 'User_Id');

    assert.strictEqual(toAdaCase('version2API'), 'Version2_Api');
    assert.strictEqual(toAdaCase('api_v2_endpoint'), 'Api_V2_Endpoint');

    assert.strictEqual(toAdaCase('foo.bar.baz'), 'Foo_Bar_Baz');
    assert.strictEqual(toAdaCase('foo---bar___baz'), 'Foo_Bar_Baz');

    assert.strictEqual(toAdaCase('hello'), 'Hello');
    assert.strictEqual(toAdaCase('HELLO'), 'Hello');

    assert.strictEqual(toAdaCase(''), '');
  });
});
