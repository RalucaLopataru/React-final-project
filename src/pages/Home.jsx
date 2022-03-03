import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addUser } from '../redux/user/UserActions';


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nume: '',
            prenume: '',
            meserie: '',
            salariu: '',
            dataangajarii: ''
        };
    }

    updateNume(event) {
        this.setState({ nume: event.target.value });
    }

    updatePrenume(event) {
        this.setState({ prenume: event.target.value });
    }

    updateMeserie(event) {
        this.setState({ meserie: event.target.value });
    }
    updateSalariu(event) {
        this.setState({ salariu: event.target.value });
    }
    updateDataAngajarii(event) {
        this.setState({ dataangajarii: event.target.value });
    }

    submitUser(event) {
        event.preventDefault();
        console.log("USER ADDED", this.state);
        this.props.addUser(this.state);
        this.setState({
            nume: '',
            prenume: '',
            meserie: '',
            salariu: '',
            dataangajarii: ''
        });
    }

    render() {
        return (
            <div className="container">

                <h1 className='text-center text-info'>Home</h1>

                <form
                    className="user-add-form container w-50 p-3 my-3  border "
                    onSubmit={(event) => this.submitUser(event)}
                >
                    <h3>Add New User</h3>

                    <label htmlFor="nume">Nume:</label>
                    <input
                        value={this.state.nume}
                        className="form-control"
                        type="text"
                        name="nume"
                        required
                        onChange={(event) => this.updateNume(event)}
                    />
                    <label htmlFor="prenume">Prenume:</label>
                    <input
                        value={this.state.prenume}
                        className="form-control"
                        type="text"
                        name="prenume"
                        required
                        onChange={(event) => this.updatePrenume(event)}
                    />

                    <label htmlFor="meserie">Meserie:</label>
                    <input
                        value={this.state.meserie}
                        className="form-control"
                        type="text"
                        name="meserie"
                        required
                        onChange={(event) => this.updateMeserie(event)}
                    />

                    <label htmlFor="salariu">Salariu:</label>
                    <input
                        value={this.state.salariu}
                        className="form-control"
                        type="text"
                        name="salariu"
                        required
                        onChange={(event) => this.updateSalariu(event)}
                    />

                    <label htmlFor="dataangajarii">Data angajarii:</label>
                    <input
                        value={this.state.dataangajarii}
                        className="form-control"
                        type="text"
                        name="dataangajarii"
                        required
                        onChange={(event) => this.updateDataAngajarii(event)}

                    />


                    <div>
                        <input
                            className="btn"
                            type="submit"
                            value="Add user"
                        />
                    </div>
                </form>

                <div class="col-md-12 text-center">
                <Link to="/people">
                    <button type="button" className='btn btn-secondary '>
                        Pagina urmatoare
                    </button>
                </Link>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    addUser: (user) => dispatch(addUser(user)),
});

export default connect(null, mapDispatchToProps)(Home);
