import Database from 'better-sqlite3';
import fs from 'fs';
import path from 'path';

const dbPath = path.join(process.cwd(), 'school.db');
const db = new Database(dbPath);

// Initialize database with schema
const schema = fs.readFileSync(path.join(process.cwd(), 'schema.sql'), 'utf8');
db.exec(schema);

export default db;
