import AppRoutes from './AppRoutes'
import GlobalStyles from '../theme/GlobalStyles'
import CustomThemeProvider from '../providers/CustomThemeProvider'

function App() {
  return (
    <CustomThemeProvider>
      <AppRoutes />
      <GlobalStyles />
    </CustomThemeProvider>
  )
}

export default App
