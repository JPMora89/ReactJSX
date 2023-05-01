const App = () => (
    <div>
        < PersonComponent name="Pablo" age={33} hobbies={["coding", "finance", "reading"]} />
        < PersonComponent name="Cisco" age={17} hobbies={["soccer", "finance", "real estate"]} />
        < PersonComponent name="Ray" age={25} hobbies={["coding", "finance", "reading"]} />
    </div>
)

ReactDOM.render(<App />, document.getElementById('root'));