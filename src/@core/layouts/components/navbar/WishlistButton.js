import { useEffect, Fragment, useState } from "react"
import { useHistory } from "react-router-dom"

import { Heart } from "react-feather"
import { isUserLoggedIn } from "@utils"

const WishlistButtonComponent = () => {
  const history = useHistory()

  const [userData, setUserData] = useState(null)
  const [guestWishlistId, setGuestWishlistId] = useState()

  useEffect(() => {
    if (isUserLoggedIn() !== null) {
      setUserData(JSON.parse(localStorage.getItem("userData")))
    } else {
      const data = JSON.parse(localStorage.getItem("guestData"))
      setGuestWishlistId(data.wishlist.uid)
    }
  }, [])

  const handleWishlist = () => {
    if (userData) {
      return history.push("/account/store/wishlists")
    } else {
      return history.push(`/account/store/wishlists/${guestWishlistId}/view`)
    }
  }

  return (
    <Fragment>
      <Heart
        className="ficon heartdropdown"
        style={{ cursor: "pointer" }}
        onClick={() => handleWishlist()}
      />
    </Fragment>
  )
}

export default WishlistButtonComponent
