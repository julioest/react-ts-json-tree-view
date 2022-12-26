import React from 'react';
import { TreeNodeWrapperProps, TreeViewProps } from '../types';

const TreeView = ({
  data,
  toggled = true,
  name = '',
  isFirstElement = true,
  isLastElement = true,
  isChildElement = false,
}: TreeViewProps) => {
  const [isToggled, setIsToggled] = React.useState(toggled);
  const isDataArray = Array.isArray(data);
  const nameExists = name ? name : '';

  const handleToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsToggled(!isToggled);
  };

  const addBraces = (status: string) => {
    switch (status) {
      case 'open':
        return isDataArray ? '[' : '{';
      case 'close':
        return isDataArray ? ']' : '}';
      default:
        break;
    }
  };

  return (
    <TreeNodeWrapper condition={isFirstElement} className="tree">
      <li className={`${isChildElement ? 'tree-node is-child' : 'tree-node'}`}>
        <div className="tree-node-parent">
          <button className={!isToggled ? 'caret' : 'caret toggled'} onClick={handleToggle} />
          <span>
            {nameExists && <strong>{name}:&nbsp;</strong>}
            {addBraces('open')}
            {!isToggled && '...'}
          </span>
        </div>
        <ul className={`${isToggled ? 'tree-branch' : 'tree-branch collapsed'}${isChildElement ? ' is-child' : ''}`}>
          {Object.keys(data).map((value: string, index: number, arr: Array<string>) => {
            let key = value as keyof typeof data;
            return typeof data[key] === 'object' ? (
              <TreeView
                key={`${nameExists}-${value}-${index}`}
                data={data[key]}
                name={isDataArray ? '' : value}
                isLastElement={index === arr.length - 1}
                isChildElement
              />
            ) : (
              <div
                key={`${nameExists}-${value}-${index}`}
                className={`tree-node ${isToggled ? '' : 'collapsed'}${isChildElement ? 'is-child' : ''}`}
              >
                {isDataArray ? '' : <strong>{value}: </strong>}
                {data[key]}
                {index === arr.length - 1 ? '' : ','}
              </div>
            );
          })}
        </ul>
        <span>
          {/* {isToggled && addBraces('close')} */}
          {isDataArray ? ']' : '}'}
          {!isLastElement ? ',' : ''}
        </span>
      </li>
    </TreeNodeWrapper>
  );
};

const TreeNodeWrapper = ({ condition, children, className }: TreeNodeWrapperProps) => {
  if (condition) {
    return <ul {...{ className }}>{children}</ul>;
  }

  return children;
};

export default TreeView;
