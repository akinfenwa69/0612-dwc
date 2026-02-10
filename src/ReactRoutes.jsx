import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import App from './App'

// javascript
import Javascript from './pages/javascript'
import JavascriptEx1 from './pages/javascript/1'
import JavascriptEx2 from './pages/javascript/2'
import JavascriptEx3_1 from './pages/javascript/3-1'
import JavascriptEx3_2 from './pages/javascript/3-2'
import JavascriptEx3_3 from './pages/javascript/3-3'
import JavascriptEx4_1 from './pages/javascript/4-1'
import JavascriptEx4_2 from './pages/javascript/4-2'
import LlistaContactes from './pages/javascript/llista-contactes'

// react
import React from './pages/react'
import GestorTasques from './pages/react/gestor-tasques'

// other
import Settings from './pages/settings'

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="/" element={<App />} />

            {/* JAVASCRIPT */}
            <Route path="/javascript" element={<Javascript />} />
            <Route path="/javascript/1" element={<JavascriptEx1 />} />
            <Route path="/javascript/2" element={<JavascriptEx2 />} />
            <Route path="/javascript/3-1" element={<JavascriptEx3_1 />} />
            <Route path="/javascript/3-2" element={<JavascriptEx3_2 />} />
            <Route path="/javascript/3-3" element={<JavascriptEx3_3 />} />
            <Route path="/javascript/4-1" element={<JavascriptEx4_1 />} />
            <Route path="/javascript/4-2" element={<JavascriptEx4_2 />} />
            <Route path="/javascript/llista-contactes" element={<LlistaContactes />} />


            {/* REACT */}
            <Route path="/react" element={<React />} />
            <Route path="/react/gestor-tasques" element={<GestorTasques />} />

            {/* OTHER */}
            <Route path="/settings" element={<Settings />} />
        </Route>
    )
)