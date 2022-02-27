import { FC } from 'react';
import { Chip } from 'core-ui';
import { TableProps } from './props';
import { className } from './methods';

export const Table: FC<TableProps> = (props: TableProps) => {
  const { header, data }: TableProps = props;

  return (
    <table className={className()}>
      <thead>
        <tr>
          {header.map((name) => (
            <th>{name}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data?.map((data) => (
          <tr>
            {Object.values(data).map((name) =>
              typeof name == 'object' ? (
                <td>
                  {Object.values(name).map((name) => (
                    <>
                      <Chip color='secondary'>{name}</Chip> &nbsp;
                    </>
                  ))}
                </td>
              ) : (
                <td>{name}</td>
              )
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
