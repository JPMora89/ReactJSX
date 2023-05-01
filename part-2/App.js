const App = () => (
    <div>
    <Tweet username="Pablo" name="Pablo" date={new Date().toString()} message="Hello World" />
    <Tweet username="Cisco" name="Cisco" date={new Date().toString()} message="Hello World" />
    <Tweet username="Ray" name="Raymond" date={new Date().toString()} message="Hello World" />
    </div>
)

ReactDOM.render(<App />, document.getElementById('root'));