const filterReducer = (state, action) => {
  switch (action.type) {
    case "SET_FILTER_LOADING":
      return {
        ...state,
        isProductsLoading: true,
      };

    case "LOAD_FILTER_PRODUCTS":
      return {
        ...state,
        filter_products: [...action.payload],
        all_products: [...action.payload],
        isProductsLoading: false,
      };

    case "SET_GRID_VIEW":
      return {
        ...state,
        grid_view: true,
      };

    case "SET_LIST_VIEW":
      return {
        ...state,
        grid_view: false,
      };

    case "GET_SORT_PRODUCTS": {
      return {
        ...state,
        sorting_value: action.payload,
      };
    }

    case "SORTING_PRODUCTS": {
      let newSortData;
      const { filter_products } = state;
      let tempSortProduct = [...filter_products];
      tempSortProduct.sort((a, b) => {
        if (state.sorting_value === "price-ascending") {
          return a.price - b.price;
        }
        if (state.sorting_value === "price-descending") {
          return b.price - a.price;
        }
        if (state.sorting_value === "product-ascending") {
          return a.name.localeCompare(b.name);
        }
        if (state.sorting_value === "product-descending") {
          return b.name.localeCompare(a.name);
        }
        return 0;
      });
      newSortData = tempSortProduct;
      return {
        ...state,
        filter_products: newSortData,
      };
    }

    case "UPDATE_FILTER_VALUE": {
      const { name, value } = action.payload;

      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };
    }

    case "FILTER_PRODUCTS": {
      let { all_products } = state;
      let tempFilterProduct = [...all_products];
      const { searchText } = state.filters;

      if (searchText) {
        tempFilterProduct = tempFilterProduct.filter((curElem) => {
          return curElem.name.includes(searchText); 
        });
      }
      return {
        ...state,
        filter_products: tempFilterProduct,
      };
    }
    default:
      return state;
  }
};

export default filterReducer;
