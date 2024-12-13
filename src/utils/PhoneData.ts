import { readFileSync } from 'fs';

export function getPhoneNumbersFromFile() {
  const data = JSON.parse(readFileSync('data.json', 'utf-8'));
  return data.phoneNumbers;
}
