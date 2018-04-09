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
  function findAndToggleChecked(id){
    let item = this.findById(id);
    item.checked = !item.checked;
  }
  function findAndUpdateName(id,newName){
    try{
      Item.validateName(newName);
      let item = this.findById(id);
      item.name = newName;
    }
    catch(e){
      return `Cannot update name: ${e.message}`;
    }
  }
  function findAndDelete(id){
      
   let newArray = this.items.filter(function(item){
      return item.id !== id;
    });
    this.items = newArray;
  }

 
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

