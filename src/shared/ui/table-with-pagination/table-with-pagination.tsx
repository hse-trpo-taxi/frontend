import { MaterialReactTable } from 'material-react-table'
import type { TableWithPaginationType } from './table-with-pagination-type'
import { MRT_Localization_RU } from 'material-react-table/locales/ru'

export const TableWithPagination = <T extends Record<string, any>>({
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
      muiTableHeadCellProps={{
        sx: {
          fontFamily: 't2-Rooftop-regular',
          fontSize: '12px',
          color: 'black',
          textShadow: 'none',
          whiteSpace: 'nowrap',
          minWidth: 'fit-content'
        }
      }}
      muiFilterTextFieldProps={{
        sx: {
          '& .MuiInput-underline:before': {
            borderBottom: 'none'
          },
          '& .MuiInput-underline:after': {
            borderBottom: 'none'
          },
          '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
            borderBottom: 'none'
          },
          '& .MuiIconButton-root': {
            padding: '4px',
            '& .MuiSvgIcon-root': {
              fontSize: '18px'
            }
          }
        }
      }}
      muiTablePaperProps={{
        sx: {
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          margin: 0,
          borderRadius: 0,
          boxShadow: 'none',
          '& .MuiTable-root': {
            '& .MuiTableHead-root': {
              boxShadow: 'none',
              '& tr': {
                boxShadow: 'none',
                '& th': {
                  boxShadow: 'none',
                  backgroundImage: 'none',
                  '&::before, &::after': {
                    display: 'none !important'
                  }
                }
              }
            }
          },
        }
      }}
      muiTableBodyCellProps={{
        sx: {
          fontSize: '12px',
          fontFamily: 't2-Rooftop-regular',
        }
      }}
      muiTableContainerProps={{
        sx: {
          maxHeight: '100%',
          flex: '1 1 auto',
          width: '100%'
        }
      }}
      muiPaginationProps={{
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
          showLastButton: false
        }),
        ...(totalPage > 2 && {
          hideNextButton: page >= totalPage - 1,
          hidePrevButton: page === 0,
          showFirstButton: page > 1,
          showLastButton: page < totalPage - 2
        })
      }}
      muiTableBodyRowProps={({ row }) => ({
        onClick: () => {
          onRowClick?.(row.original);
        },
        sx: {
          cursor: onRowClick ? 'pointer' : 'default',
          '&:hover': {
            backgroundColor: '#F2F2F2'
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
            }
          }
        },
      })}
      {...restProps}
    />
  )
}
