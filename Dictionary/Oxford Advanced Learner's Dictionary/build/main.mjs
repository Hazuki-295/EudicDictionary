import { SourceDatabase, TargetDatabase, moduleRegistry } from 'mdx-sqlite-utils';

moduleRegistry.registerModule('transformHtml', './transform-html.mjs');

async function main() {
    const sourceDatabase = new SourceDatabase('oaldpe.db');
    const targetDatabase = new TargetDatabase('oaldpe_cleaned.db');

    // Fetch HTML records in batches and transform them in parallel before inserting into the target database
    for await (const transformedRecords of sourceDatabase.traverseAndTransformHtmlRecordsInParallel()) {
        targetDatabase.insertRecords(transformedRecords);
    }

    // Fetch LINK records from the source database and insert directly into the target database
    const linkRecords = sourceDatabase.fetchLinkRecords();
    targetDatabase.insertRecords(linkRecords);

    // Set up the configuration entries
    targetDatabase.deleteRecordsByEntries(['oaldconfig', 'oaldcfg']);
}

main();
