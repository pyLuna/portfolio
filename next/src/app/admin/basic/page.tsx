import Button from "@/component/ui/Button";
import TextField from "@/component/ui/TextField";

const BasicInfoPage = () => {
    return (
        <form className="page flex flex-col gap-4">
            <TextField
                label="Full Name"
                name="full-name"
                placeholder="My full name"
            />
            <TextField
                label="Address"
                name="address"
                placeholder="My address"
            />
            <TextField
                label="Zip Code"
                name="zip-code"
                placeholder="0000"
                type="number"
            />
            <TextField
                label="Phone Number"
                name="phone-number"
                placeholder="My Phone Number"
            />
            <Button variant="primary" type="submit">Save</Button>
        </form>
    )
}

export default BasicInfoPage;