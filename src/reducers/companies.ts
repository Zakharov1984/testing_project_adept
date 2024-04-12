interface Companies {
  id: string;
  name: string;
  address: string;
  employeeCounter: number;
}

interface CompaniesInitialState {
  companies: Companies[];
  companiesLoadingStatus: string;
}

const initialState: CompaniesInitialState = {
  companies: [],
  companiesLoadingStatus: 'idle',
}

const companies = (state = initialState, action: any) => {
  switch (action.type) {
    case 'COMPANIES_FETCHING':
      return {
        ...state,
        companiesLoadingStatus: 'loading'
    }
    default: return state;
  }
}

export default companies;