// ** React Imports
import { Fragment, useState, useRef } from 'react'

// ** Vertical Menu Items Array
import navigation from '@src/navigation/vertical'

// ** Third Party Components
import classnames from 'classnames'
import PerfectScrollbar from 'react-perfect-scrollbar'
import VerticalNavMenuItems from '../../../../@core/layouts/components/menu/vertical-menu/VerticalNavMenuItems'

// ** Vertical Menu Components
// import VerticalMenuHeader from './VerticalMenuHeader'
// import VerticalNavMenuItems from './VerticalNavMenuItems'
import './CategoriesNavMenu.scss'
import { useSelector } from 'react-redux'
import { object } from 'prop-types'
import { useParams } from 'react-router-dom'

const CategoriesNavMenu = props => {
  // ** Props
  const { routerProps, menu, skin } = props

  const { slug } = useParams()

  // ** States
  const [groupOpen, setGroupOpen] = useState([])
  const [groupActive, setGroupActive] = useState([])
  const [activeItem, setActiveItem] = useState(null)
  const [currentActiveItem, setCurrentActiveItem] = useState(null)
  const [menuCollapsed, setMenuCollapsed] = useState(false)

  // ** Menu Hover State
  const [menuHover, setMenuHover] = useState(false)

  // ** Ref
  const shadowRef = useRef(null)

  // ** Function to handle Mouse Enter
  const onMouseEnter = () => {
      console.log("click")
    if (menuCollapsed) {
      setMenuCollapsed(false)
    } else {
        setMenuCollapsed(true)
    }

    setMenuHover(true)
  }

  // ** Scroll Menu
  const scrollMenu = container => {
    if (shadowRef && container.scrollTop > 0) {
      if (!shadowRef.current.classList.contains('d-block')) {
        shadowRef.current.classList.add('d-block')
      }
    } else {
      if (shadowRef.current.classList.contains('d-block')) {
        shadowRef.current.classList.remove('d-block')
      }
    }
  }

  /*

  {
    id: 'charts',
    title: 'Charts',
    badge: 'light-danger',
    badgeText: '3',
    icon: <PieChart size={20} />,
    children: [
      {
        id: 'apex',
        title: 'Apex',
        icon: <Circle size={12} />,
        navLink: '/charts/apex'
      },
      {
        id: 'chartJs',
        title: 'ChartJS',
        icon: <Circle size={12} />,
        navLink: '/charts/chartjs'
      },
      {
        id: 'recharts',
        title: 'Recharts',
        icon: <Circle size={12} />,
        navLink: '/charts/recharts'
      }
    ]
  },
  */

  const { categories } = useSelector(state => state.ecommerce)

  if (!(categories.data instanceof Object)) {
      return null
  }

  const formatCategoryObj = (cat) => {
        return cat.map(c => {
            const resp = {
                id: c.abs_slug,
                title: c.name,
                navLink: `/store/c/${c.abs_slug}`
            }

            if (c.children instanceof Array && c.children.length > 0) {
                resp.children = formatCategoryObj(c.children)
            }

            return resp
        })
  }

  const formattedCategories = formatCategoryObj(categories.data)

  console.log({ formattedCategories })

  return (
    <Fragment>
        <div className="vertical-categories vertical-menu-modern">
      <div
        className={classnames('vertical-menu main-menu menu-accordion menu-shadow', {
        //   expanded: menuHover || menuCollapsed === false,
          'menu-light': skin !== 'semi-dark' && skin !== 'dark',
          'menu-dark': skin === 'semi-dark' || skin === 'dark'
        })}
        onMouseEnter={onMouseEnter}
        // onMouseLeave={() => setMenuHover(false)}
      >
        {menu ? (
          menu
        ) : (
          <Fragment>
            {/* Vertical Menu Header */}
            {/* Vertical Menu Header Shadow */}
            <div className='shadow-bottom' ref={shadowRef}></div>
            {/* Perfect Scrollbar */}
            <PerfectScrollbar
              className='main-menu-content'
              options={{ wheelPropagation: false }}
              onScrollY={container => scrollMenu(container)}
            >
              <ul className='navigation navigation-main'>
                <VerticalNavMenuItems
                  items={formattedCategories}
                  groupActive={groupActive}
                  setGroupActive={setGroupActive}
                  activeItem={activeItem}
                  setActiveItem={setActiveItem}
                  groupOpen={groupOpen}
                  setGroupOpen={setGroupOpen}
                  routerProps={routerProps}
                  menuCollapsed={menuCollapsed}
                  menuHover={menuHover}
                  currentActiveItem={currentActiveItem}
                />
              </ul>
            </PerfectScrollbar>
          </Fragment>
        )}
      </div>
      </div>
    </Fragment>
  )
}

export default CategoriesNavMenu
