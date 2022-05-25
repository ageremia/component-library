import Box from "./Box";
import Button from "./Button";
import Text from "./Text";

const MyAwesomeComponent = () => {

    return (
        <>
            <Box size="small">Hello</Box>
            <Text size="Large" color="green">Big Text</Text>
            <Button color="red" onClick={() => {alert("clicked!")}}>Red Button</Button>
        </>
    )

}

export default MyAwesomeComponent;