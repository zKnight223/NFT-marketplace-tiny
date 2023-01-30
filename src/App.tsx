import { ReactElement, useEffect, createElement, Fragment } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import { CacheProvider } from '@emotion/react'
import createCache from '@emotion/cache'
import Web3WrapperProvider from 'contexts/Web3WrapperProvider'
import Web3ModalProvider from 'contexts/Web3ModalProvider'
import routes from 'config/routes'
import type { RouteType } from 'config/routes'
import Home from 'pages/home'
import { useTheme } from 'assets/theme'
import Layout from 'uikit/widgets/Layout'

const cache = createCache({
  key: 'css',
  prepend: true,
})

function App(): ReactElement {
  const { pathname } = useLocation()
  const { theme, themeState, setThemeState } = useTheme()

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0
    document.scrollingElement!.scrollTop = 0
  }, [pathname])

  const getRoutes = (allRoutes: RouteType[]): ReturnType<typeof Route>[] | null =>
    allRoutes.map((route) => {
      if (route.subRoutes) {
        return (
          <Fragment key={route.key}>
            {route.subRoutes.map((subRoute, index) => (
              <Route
                path={`${route.path}${subRoute.path}`}
                key={subRoute.key}
                element={subRoute.element}
              />
            ))}
          </Fragment>
        )
      }
      if (route.path) {
        return <Route path={route.path} element={createElement(route.component)} key={route.key} />
      }

      return null
    })

  // Change the theme mode
  const handleToggleTheme = () => {
    setThemeState(!themeState)
  }

  return (
    <ThemeProvider theme={theme}>
      <CacheProvider value={cache}>
        <Web3ModalProvider connectOnLoad={false}>
          <Web3WrapperProvider>
            <Layout toggleTheme={themeState} changeTheme={handleToggleTheme}>
              <Routes>
                {getRoutes(routes)}
                <Route path="/*" element={createElement(Home)} />
              </Routes>
            </Layout>
          </Web3WrapperProvider>
        </Web3ModalProvider>
      </CacheProvider>
    </ThemeProvider>
  )
}

export default App
