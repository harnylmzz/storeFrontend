import React, { useState, useEffect } from "react";
import { Icon, Menu } from "semantic-ui-react";
import CategoryService from "../services/categoryService";

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [activeItem, setActiveItem] = useState("home");

  useEffect(() => {
    let categoryService = new CategoryService();
    categoryService
      .getCategories()
      .then((result) => setCategories(result.data.data));
  }, []);

  const handleItemClick = (e, { name }) => {
    setActiveItem(name);
  };

  return (
    <div>
      <Menu pointing vertical>
        <Menu.Item
          name="Kategoriler"
        />
        {categories.map((category) => (
          <Menu.Item
            key={category.id}
            name={category.name}
            active={activeItem === category.name}
            onClick={handleItemClick}
            content={
              <div>
                <Icon name="caret right" />
                {category.name}
              </div>
            }
          />
        ))}
      </Menu>
    </div>
  );
}
