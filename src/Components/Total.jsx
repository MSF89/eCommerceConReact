import { Button } from "@mui/material"
import accounting from "accounting"
import { getBasketTotal } from "../reducer"
import { useStateValue } from "../StateProvider"

const margin = {
    margin: "1em",
    marginTop: "2em"
  }

const Total = () => {
    const [{basket}, dispatch] = useStateValue()
    
    return (
        <div className="totalComp">
            <h5>Total Items: {basket?.length}</h5>
            <h5>{accounting.formatMoney(getBasketTotal(basket), "US$")}</h5>

            <Button style={margin} variant="contained" color="secondary">Check out</Button>
        </div>
    )
}

export default Total