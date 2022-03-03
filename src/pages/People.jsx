import React from 'react';
import { Link } from 'react-router-dom';
// import './People.css';
import { connect } from 'react-redux';
import PeopleItem from "../components/PeopleItem"

class People extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      numeChecked: false,
      pretChecked: false,
      filterAChecked: false,
      filterBChecked: false,
      filterCChecked: false
    }
  }

  componentDidMount() {
    this.setState({
      ...this.state,
      users: [...this.props.users],
      numeChecked: false,
      pretChecked: false,
      filterAChecked: false,
      filterBChecked: false,
      filterCChecked: false
    })
    console.log("MOUNT", this.props.users)
  }



  componentWillUnmount() {

    console.log("UNMOUNT")
  }



  handleSortByName = async () => {
    const isChecked = !this.state.numeChecked;
    await this.setState({
      ...this.state,
      numeChecked: isChecked,
      pretChecked: false,
      filterAChecked: false,
      filterBChecked: false,
      filterCChecked: false
    });


    console.log(isChecked);

    if (isChecked) {
      const originalCopyUsers = [...this.props.users];
      const sortedArrayByName = originalCopyUsers.sort((el1, el2) => {
        if (el1.nume < el2.nume) {
          return -1;
        } else if (el1.nume > el2.nume) {
          return 1;
        }
        else {
          return 0;
        }
      })
      this.setState({
        ...this.state,
        users: [...sortedArrayByName]
      });
      console.log("nume", sortedArrayByName);
      return;
    }

    this.setState({
      ...this.state,
      users: [...this.props.users]
    })


  }
  handleSortByPrice = async () => {
    const isChecked = !this.state.pretChecked;
    await this.setState({
      ...this.state,
      pretChecked: isChecked,
      numeChecked: false,
      filterAChecked: false,
      filterBChecked: false,
      filterCChecked: false
    });


    if (isChecked) {
      const originalCopyUsers = [...this.props.users];
      const sortedArrayByPrice = originalCopyUsers.sort((el1, el2) => {
        if (Number(el1.salariu) < Number(el2.salariu)) {
          return -1;
        } else if (Number(el1.salariu) > Number(el2.salariu)) {
          return 1;
        }
        else {
          return 0;
        }
      });
      this.setState({
        ...this.state,
        users: [...sortedArrayByPrice]
      })
      console.log("pret", sortedArrayByPrice);
      return;
    }

    this.setState({
      ...this.state,
      users: [...this.props.users]
    })

  }

  handleFilterA = async () => {
    const isChecked = !this.state.filterAChecked;
    await this.setState({
      ...this.state,
      numeChecked: false,
      pretChecked: false,
      filterAChecked: isChecked,
      filterBChecked: false,
      filterCChecked: false
    });


    if (isChecked) {

      const originalCopyUsers = [...this.props.users];
      const filteredArrayA = originalCopyUsers.filter((el) => {
        return Number(el.salariu) <= 2500;
      });
      this.setState({
        ...this.state,
        users: [...filteredArrayA]
      })
      console.log(filteredArrayA);
      return;
    }
    this.setState({
      ...this.state,
      users: [...this.props.users]
    })
  }


  handleFilterB = async () => {
    const isChecked = !this.state.filterBChecked;
    await this.setState({
      ...this.state,
      numeChecked: false,
      pretChecked: false,
      filterAChecked: false,
      filterBChecked: isChecked,
      filterCChecked: false
    });

    if (isChecked) {
      const originalCopyUsers = [...this.props.users];
      const filteredArrayB = originalCopyUsers.filter((el) => {
        return Number(el.salariu) >= 2500 && Number(el.salariu) <= 4000;
      });

      this.setState({
        ...this.state,
        users: [...filteredArrayB]
      })
      console.log(filteredArrayB);
      return;
    }

    this.setState({
      ...this.state,
      users: [...this.props.users]
    });
  }



  handleFilterC = async () => {
    const isChecked = !this.state.filterCChecked;
    await this.setState({
      ...this.state,
      numeChecked: false,
      pretChecked: false,
      filterAChecked: false,
      filterBChecked: false,
      filterCChecked: isChecked
    });
    console.log(isChecked);
    if (isChecked) {
      const originalCopyUsers = [...this.props.users];
      const filteredArrayC = originalCopyUsers.filter((el) => {
        return Number(el.salariu) >= 4000;
      });
      this.setState({
        ...this.state,
        users: [...filteredArrayC]
      })
      console.log(filteredArrayC);
      return;
    }
    console.log(this.props.users);
    this.setState({
      ...this.state,
      users: [...this.props.users]
    });
  }


  render() {
    return (
      <div>

        <h1 className='text-center text-info'>People</h1>

        <div className='col-6  d-inline-flex p-3  '>
          <div className='container p-3 my-3 border bg-light'>
            <form>
              <label htmlFor="sorteaza">Sorteaza dupa: </label><br />
              <input id="sortare" type="checkbox" checked={this.state.numeChecked} onClick={this.handleSortByName} /> nume <br />
              <input id="sortare" type="checkbox" checked={this.state.pretChecked} onClick={this.handleSortByPrice} /> pret <br />
              <label htmlFor="filtreaza">Filtreaza dupa pret:</label><br />
              <input id="filtrare" type="checkbox" checked={this.state.filterAChecked} onClick={this.handleFilterA} /> Pana in 2500<br />
              <input id="filtrare" type="checkbox" checked={this.state.filterBChecked} onClick={this.handleFilterB} /> 2500-4000<br />
              <input id="filtrare" type="checkbox" checked={this.state.filterCChecked} onClick={this.handleFilterC} /> Peste 4000<br />
            </form> <br />

            <Link to="/">
              <button type="button" className='btn btn-secondary float-left'>
                Pagina anterioara (HOME)
              </button>
            </Link>
          </div>



          <div className='container p-3 my-3 border text-center'>

            <h4 className="title ">PEOPLE LIST:</h4>

            <div className="container border">
              {this.state.users.map((user) => {
                return <PeopleItem {...user} />
              })}
            </div>

          </div>

        </div>



      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users
});

export default connect(
  mapStateToProps,
  null
)(People);








