import React from "react"
import data from "./data"
import styled from "styled-components"

const TableStyled = styled.table`
  border-collapse: collapse;
  width: 100%;

  tr:first-child {
    font-weight: 500;
  }

  tr td:first-child {
    background-color: #d4d4d4;
    font-weight: 700;
  }

  td {
    border: 3px solid #363636;
    margin: 0%;
  }
`

const Table = () => {
  return (
    <div style={{ padding: 50 }}>
      {data.map((dataList, index) => (
        <div key={index}>
          <div>
            {dataList.infoList.map((info, index) => (
              <div key={index} className={info.fontStyle}>
                {info.text}
              </div>
            ))}
            <br />
          </div>
          <div>
            {dataList.tables.map((table, index) => (
              <div key={index}>
                {table.tableInfoList.map((info, index) => (
                  <div key={index} className={info.fontStyle}>
                    {info.text}
                  </div>
                ))}
                {table.tableRowList.length && (
                  <TableStyled border="1">
                    <tbody>
                      {table.tableRowList.map((row, index) => (
                        <Row key={index} row={row} />
                      ))}
                    </tbody>
                  </TableStyled>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

const Row = ({ row }) => {
  return (
    <tr>
      {row.rowCells.map((cell, index) => (
        <td
          key={index}
          className={cell.fontStyle}
          colSpan={cell.colSpan}
          style={{ padding: 5, textAlign: "center" }}
        >
          {cell.text}
        </td>
      ))}
    </tr>
  )
}

export default Table
