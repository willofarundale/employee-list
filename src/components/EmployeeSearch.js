import React,{Component} from 'react';
import EmployeeData from '../data/employees.json';

export default class EmployeeSearch extends Component {

    constructor(props) {
        super(props);

        this.state = {
            search: "",
            clicked: {},
            selected: 0,
        };
    }

    updateSearch(event) {
        this.setState({search: event.target.value.substr(0,20)});
    }

    handleClick = i => {
        this.setState(prevState => {
          const clicked = { ...prevState.clicked };
          clicked[i] = !clicked[i];
          return { clicked };
        });
    };

    render() {
        let filteredEmployees = EmployeeData.filter(
            (employee) => {
                return employee.firstname.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
            }
        );

        return (
            <div className="employee-search">               
                <div className="search">
                    <div className="title">Autocomplete on 10k elements</div>
                    <input type="text" 
                    value={this.state.search}
                    placeholder="Search Employees"
                    autoFocus={true}
                    onChange={this.updateSearch.bind(this)}
                    />
                </div>
    
                <div className="employee-container">
                {   
                    filteredEmployees.map((employee,i)=> {
                       let str = `${employee.firstname}` + " " + `${employee.lastname}`;
                       var matches = str.match(/\b(\w)/g);
                       var initials = matches.join('');
                        return (
                            <div  
                            key={i} 
                            className={this.state.clicked[i] ? "employee selected" : "employee"}
                            onClick={() => this.handleClick(i)}
                            >
                                <div className="col">
                                    <span className="initials">
                                        {initials}
                                    </span>
                                </div>
                                <div className="col">
                                    <span>{employee.firstname}</span><br/>
                                    <span>{employee.lastname}</span>
                                </div>
                            </div>
                            
                        )
                        
                    })
                }
                </div>

                <div className="footer">
                    <div className="col">
                        <span className="total-results">
                            TOTAL: 10000
                        </span>    
                    </div>
                    <div className="col">
                        <span className="filtered-results">
                            FOUND: {filteredEmployees.length}
                        </span>
                    </div>   
                </div>
            </div>
        )
    }
}

