'use strict';

const store = (function() {
  let items = [
    { id: cuid(), name: 'apples', checked: false },
    { id: cuid(), name: 'oranges', checked: false },
    { id: cuid(), name: 'milk', checked: true },
    { id: cuid(), name: 'bread', checked: false }
  ];
  let hideCheckedItems = false;
  let searchTerm = '';
  function findById(id){
    return this.items.find(function(item){
      return item.id === id;
    });
  }
  function addItem(name){
    try {
      Item.validateName(name);
      this.items.push(Item.create(name));
    }
    catch(e){
      console.log(e.message);
    }
  }
  function findAndToggleChecked(id){}
  function findAndUpdateName(id,newName){}
  function findAndDelete(id){}

  return {
    findById,
    addItem,
    findAndToggleChecked,
    findAndUpdateName,
    findAndDelete,
    items: items,
    hideCheckedItems: hideCheckedItems,
    searchTerm: searchTerm,
  };
}());