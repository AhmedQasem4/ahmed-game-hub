import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { BsChevronDown } from "react-icons/bs";
import { GameQuery } from "../App";

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  sortOrde: string;
}

const SortSelector = ({ onSelectSortOrder, sortOrde }: Props) => {
  const sortOrder = [
    { value: "", label: "Relevence" },
    { value: "-added", label: "Data added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Relase date" },
    { value: "-metacritic", label: "popularity" },
    { value: "-rating", label: "Average rating" },
  ];
  const currentSortOrder = sortOrder.find(item => item.value === sortOrde);
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {currentSortOrder?.label || 'Relevance'}
      </MenuButton>
      <MenuList>
        {sortOrder.map((order) => (
          <MenuItem
            onClick={() => onSelectSortOrder(order.value)}
            value={order.value}
            key={order.value}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
