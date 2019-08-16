import React from 'react';
import axios from 'axios';
import User from '../../components/users/User';

class Home extends React.Component{

    state = {
        users : [],
        loading : false
    };

    async componentDidMount(){
        this.setState({loading : true});
        const res = await axios('https://api.github.com/users');
        this.setState({users :res.data, loading : false});
    }

    render(){
        return(
            <div>
                <User users={this.state.users} loading={this.state.loading} />
            </div>
        );
    }
}

export default Home;