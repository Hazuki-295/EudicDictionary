# Define variables
DB_CLEANED = oaldpe_cleaned.db
DB_TXT = oaldpe_cleaned.db.txt
MDX_FILE = ../oaldpe.mdx

.PHONY: build-with-cleanup build-without-cleanup clean process convert_to_txt create_mdx

# Build the entire workflow with cleanup (default behavior)
build-with-cleanup: process convert_to_txt create_mdx clean

# Build the entire workflow without cleanup (skip cleanup)
build-without-cleanup: process convert_to_txt create_mdx
	@echo "Skipping cleanup..."

# Process the database
process:
	@echo "Processing the database..."
	node main.mjs

# Convert the processed database (DB) to text (TXT)
convert_to_txt: $(DB_CLEANED)
	@echo "Converting DB to TXT..."
	mdict --db-txt $(DB_CLEANED)

# Create the MDX file
create_mdx: $(DB_TXT)
	@echo "Creating the MDX file..."
	mdict --title title.txt --description description.min.html -a $(DB_TXT) $(MDX_FILE)

# Clean up intermediate files (default behavior)
clean:
	@echo "Cleaning up intermediate files..."
	rm -f $(DB_CLEANED) $(DB_TXT)