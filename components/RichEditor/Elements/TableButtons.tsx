import React from 'react'

function TableButtons({ editor }: any) {
    return (
        <>
            <button
                className="richEditor__button"
                onClick={() => editor.chain().focus().addColumnBefore().run()}
            >
                addColumnBefore
            </button>
            <button
                className="richEditor__button"
                onClick={() => editor.chain().focus().addColumnAfter().run()}
            >
                addColumnAfter
            </button>
            <button
                className="richEditor__button"
                onClick={() => editor.chain().focus().deleteColumn().run()}
            >
                deleteColumn
            </button>
            <button
                className="richEditor__button"
                onClick={() => editor.chain().focus().addRowBefore().run()}
            >
                addRowBefore
            </button>
            <button
                className="richEditor__button"
                onClick={() => editor.chain().focus().addRowAfter().run()}
            >
                addRowAfter
            </button>
            <button
                className="richEditor__button"
                onClick={() => editor.chain().focus().deleteRow().run()}
            >
                deleteRow
            </button>
            <button
                className="richEditor__button"
                onClick={() => editor.chain().focus().deleteTable().run()}
            >
                deleteTable
            </button>
            <button
                className="richEditor__button"
                onClick={() => editor.chain().focus().mergeCells().run()}
            >
                mergeCells
            </button>
            <button
                className="richEditor__button"
                onClick={() => editor.chain().focus().splitCell().run()}
            >
                splitCell
            </button>
            <button
                className="richEditor__button"
                onClick={() => editor.chain().focus().toggleHeaderColumn().run()}
            >
                toggleHeaderColumn
            </button>
            <button
                className="richEditor__button"
                onClick={() => editor.chain().focus().toggleHeaderRow().run()}
            >
                toggleHeaderRow
            </button>
            <button
                className="richEditor__button"
                onClick={() => editor.chain().focus().toggleHeaderCell().run()}
            >
                toggleHeaderCell
            </button>
            <button
                className="richEditor__button"
                onClick={() => editor.chain().focus().mergeOrSplit().run()}
            >
                mergeOrSplit
            </button>
            <button
                className="richEditor__button"
                onClick={() =>
                    editor.chain().focus().setCellAttribute("colspan", 2).run()
                }
            >
                setCellAttribute
            </button>
            <button
                className="richEditor__button"
                onClick={() => editor.chain().focus().fixTables().run()}
            >
                fixTables
            </button>
            <button
                className="richEditor__button"
                onClick={() => editor.chain().focus().goToNextCell().run()}
            >
                goToNextCell
            </button>
            <button
                className="richEditor__button"
                onClick={() => editor.chain().focus().goToPreviousCell().run()}
            >
                goToPreviousCell
            </button>
        </>
    )
}

export default TableButtons