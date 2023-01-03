const data = {
    users: [
        {
            id: 1,
            age: 29,
            name: "Arek",
            sex: "male",
        },
        {
            id: 2,
            age: 49,
            name: "Marta",
            sex: "female",
        },
        {
            id: 3,
            age: 19,
            name: "Stasia",
            sex: "female",
        },
        {
            id: 4,
            age: 20,
            name: "Bartosz",
            sex: "male",
        }
    ]
}

const Item = ({ user }) => (
    <div>
        <h1>{user.name}</h1>
        <p>Informacje o użytkowniku</p>
        <p>Wiek użytkownika: {user.age}</p>
        <p>Płeć użytkownika: {user.sex}</p>
    </div>
)

class Arrays extends React.Component {
    state = {
        select: "all",
    }

    handleUsersFilter = (option) => {
        this.setState({
            select: option,
        })
    }

    usersList = () => {
        let users = this.props.data.users;

        if (this.state.select === "all") {
            return users.map(user => <Item user={user} key={user.id} />)
        } else if (this.state.select === "female") {
            users = users.filter(user => user.sex === "female");
            return users.map(user => <Item user={user} key={user.id} />)
        } else if (this.state.select === "male") {
            users = users.filter(user => user.sex === "male");
            return users.map(user => <Item user={user} key={user.id} />)
        } else {
            return "Nie działa"
        }
       
    }

    

    render(){

        
        return(
            <div>
                <button onClick={this.handleUsersFilter.bind(this, "all")}>Pokaż wszystkich</button>
                <button onClick={this.handleUsersFilter.bind(this, "female")}>Pokaż kobiety</button>
                <button onClick={this.handleUsersFilter.bind(this, "male")}>Pokaż mężczyn</button>
                {this.usersList()}
            </div>
            
        )
    }
}

ReactDOM.render(<Arrays data={data}/>, document.getElementById('root'))