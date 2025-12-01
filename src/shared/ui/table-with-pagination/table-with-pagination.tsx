import { MaterialReactTable } from 'material-react-table'
import type { TableWithPaginationType } from './table-with-pagination-type'
import { MRT_Localization_RU } from 'material-react-table/locales/ru'

export const TableWithPagination = <T extends Record<string, any>>({
  name,
  data,
  columns,
  isLoading,
  enableRowSelection = false,
  onRowClick,
  onRefresh,
  page,
  pageSize,
  setPage,
  setPageSize,
  rowCount,
  totalPage,
  ...restProps
}: TableWithPaginationType<T>) => {
  return (
    <MaterialReactTable
      localization={{ ...MRT_Localization_RU }}
      columns={columns}
      data={data}
      state={{
        isLoading,
        density: 'compact',
        pagination: {
          pageIndex: page,
          pageSize: pageSize,
        },
      }}
      rowCount={rowCount}
      enableStickyHeader
      enableColumnActions={false}
      enableTopToolbar={false}
      manualPagination
      onPaginationChange={(updater) => {
        const newPagination =
          typeof updater === 'function' ? updater({ pageIndex: page, pageSize }) : updater
        setPage(newPagination.pageIndex)
        setPageSize(newPagination.pageSize)
        localStorage.setItem('table-rows', `${newPagination.pageSize}`)
      }}
      paginationDisplayMode="pages"
      enableSorting={false}
      enableSortingRemoval={false}
      enableColumnFilters={false}
      enableGlobalFilter={false}
      enableFilterMatchHighlighting={false}
      enableBottomToolbar={false}
      muiPaginationProps={{
        rowsPerPageOptions: [],
        sx: {
          fontSize: '12px',
          fontFamily: 't2-Rooftop-regular',
          color: 'black',
          display: totalPage <= 1 ? 'none' : 'flex',
          '& .MuiPaginationItem-page': {
            fontSize: '14px',
            fontFamily: 't2-Rooftop-regular',
            color: 'black',
          },
        },
        ...(totalPage <= 2 && {
          hideNextButton: true,
          hidePrevButton: true,
          showFirstButton: false,
          showLastButton: false,
        }),
        ...(totalPage > 2 && {
          hideNextButton: page >= totalPage - 1,
          hidePrevButton: page === 0,
          showFirstButton: page > 1,
          showLastButton: page < totalPage - 2,
        }),
      }}
      renderEmptyRowsFallback={() => (
        <div
          style={{
            paddingTop: '100px',
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            pointerEvents: 'none',
            zIndex: 9999,
            fontSize: '14px',
            fontWeight: 'medium',
            fontFamily: 't2-Rooftop',
          }}
        >
          {name}
        </div>
      )}
      muiTableHeadCellProps={{
        sx: {
          fontFamily: 't2-Rooftop-regular',
          fontSize: '12px',
          color: 'black',
          textShadow: 'none',
          borderBottom: 'none !important',
          boxShadow: 'none !important',
          backgroundImage: 'none !important',
          background: 'transparent !important',
          backgroundColor: 'transparent !important',

          '&::before, &::after': {
            display: 'none !important',
            content: '""',
            boxShadow: 'none !important',
            border: 'none !important',
          },
          '& .Mui-TableHeadCell-Content-Wrapper': {
            boxShadow: 'none !important',
            background: 'none !important',
            backgroundImage: 'none !important',

            '&::before, &::after': {
              display: 'none !important',
              content: '""',
              boxShadow: 'none !important',
              border: 'none !important',
            },
          },
        },
      }}
      muiFilterTextFieldProps={{
        sx: {
          '& .MuiInput-underline:before': {
            borderBottom: 'none',
          },
          '& .MuiInput-underline:after': {
            borderBottom: 'none',
          },
          '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
            borderBottom: 'none',
          },
          '& .MuiIconButton-root': {
            padding: '4px',
            '& .MuiSvgIcon-root': {
              fontSize: '18px',
            },
          },
        },
      }}
      muiTablePaperProps={{
        sx: {
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          margin: 0,
          borderRadius: 0,

          boxShadow: 'none !important',
          border: 'none',
          background: 'transparent !important',
          backgroundColor: 'transparent !important',

          '& *': {
            boxShadow: 'none !important',
          },

          '& .MuiTableContainer-root': {
            boxShadow: 'none !important',
            border: 'none',
            backgroundImage: 'none',
          },

          '& .MuiTable-root': {
            boxShadow: 'none !important',

            '& .MuiTableHead-root': {
              boxShadow: 'none !important',

              '& tr': {
                boxShadow: 'none !important',

                '& th': {
                  boxShadow: 'none !important',
                  borderBottom: 'none',
                  backgroundImage: 'none !important',

                  '&::before, &::after': {
                    display: 'none !important',
                    boxShadow: 'none !important',
                    border: 'none !important',
                  },
                },
              },
            },

            '& .MuiTableBody-root': {
              boxShadow: 'none !important',

              '& tr': {
                boxShadow: 'none !important',

                '& td': {
                  boxShadow: 'none !important',
                  backgroundImage: 'none !important',
                  border: 'none',
                },
              },
            },
            '& .MuiTableCell-stickyHeader': {
              boxShadow: 'none !important',
              borderBottom: 'none',
            },
          },
        },
      }}
      muiTableBodyCellProps={{
        sx: {
          fontSize: '12px',
          fontFamily: 't2-Rooftop-regular',
          background: 'transparent !important',
          backgroundColor: 'transparent !important',
        },
      }}
      muiTableContainerProps={{
        sx: {
          maxHeight: '100%',
          flex: '1 1 auto',
          width: '100%',
          boxShadow: 'none !important',
          backgroundImage: 'none',
          zIndex: 2,
          background: 'transparent !important',
          backgroundColor: 'transparent !important',
          border: 'none !important',
        },
      }}
      muiTableBodyRowProps={({ row }) => ({
        onClick: () => {
          onRowClick?.(row.original)
        },
        sx: {
          background: 'transparent !important',
          backgroundColor: 'transparent !important',
          cursor: onRowClick ? 'pointer' : 'default',
          '&:hover': {
            backgroundColor: '#F2F2F2',
          },
          '&[data-selected="true"]': {
            backgroundColor: 'transparent !important',
            background: 'none !important',
            '& td': {
              backgroundColor: '#fae8d8ff !important',
              border: 'none !important',
              boxShadow: 'none !important',
              backgroundImage: 'none !important',
            },
            '&:hover': {
              backgroundColor: 'transparent !important',
            },
          },
        },
      })}
      {...restProps}
    />
  )
}
