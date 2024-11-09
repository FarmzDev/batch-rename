fileDropdownLinks([
    {
      label: "BULK Rename",
      button: true,
      dataId: "bulk-rename",
      multi: true,
      onclick: bulkRename
    }
]);

// const Dialog = (await import('./dialog.js')).default;

function bulkRename(files) {
    let fileName = "test"
    const confirmDialog = new Dialog(`
        <div class="flex flex-col space-y-1.5">
            <h1 class="text-lg font-semibold leading-none tracking-tight">Rename File</h1>    
            <p class="text-sm text-muted-foreground">Edit the filename for '${fileName}'</p>
        </div>
        <form class="flex flex-col gap-4">
            <input value="${fileName}" type="text" placeholder="New Filename" class="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"/>
            <button type="submit" class="text-sm dark:bg-muted dark:disabled:bg-muted/90 bg-primary disabled:bg-primary/90 transition-all text-white font-medium h-9 inline-flex px-4 w-full text-center justify-center rounded-md items-center">Update</button>
        </form>
    `, true);
    // for (let i = 0; i < files.length; i++) {
    //     let fileId = renameButton.getAttribute("data-id") || this.selectedFiles[0]?.id;
    //     let fileName = renameButton.getAttribute("data-name") || this.selectedFiles[0]?.filename;
    // }

}