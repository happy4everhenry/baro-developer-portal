import { useMDXComponents as getDocsMDXComponents } from 'nextra-theme-docs'

// Existing components
import { ColorSwatch, SwatchGrid } from './components/ColorSwatch'
import { ApiEndpoint } from './components/ApiEndpoint'
import { FlowDiagram, FlowRow, FlowNode, FlowArrow } from './components/FlowDiagram'
import { StatCard, StatGrid } from './components/StatCard'
import { PropsTable } from './components/PropsTable'
import { StatusBadge } from './components/StatusBadge'
import { KoreanLabel } from './components/KoreanLabel'
import { PageMeta } from './components/PageMeta'
import { ScreenMap, ScreenRegion, ScreenSubRegion, ScreenGroup, ScreenLabel, FileLink } from './components/ScreenMap'

// New components
import { Tabs, Tab } from './components/Tabs'
import { Modal } from './components/Modal'
import { Accordion, AccordionItem } from './components/Accordion'
import { FeatureCard, FeatureGrid, QuickNav, QuickNavCard } from './components/FeatureCard'
import { StepGuide, Step } from './components/StepGuide'
import { Hero, HeroBadge } from './components/Hero'
import { Timeline, TimelineItem } from './components/Timeline'
import { Diagram, DiagramNode, DiagramArrow, DiagramRow, DiagramGroup, InfoBox } from './components/Diagram'
import { Tooltip, Compare, ProgressBar } from './components/Tooltip'

export const useMDXComponents = (components) => {
  const docsComponents = getDocsMDXComponents(components)
  return {
    ...docsComponents,
    // Existing
    ColorSwatch, SwatchGrid,
    ApiEndpoint,
    FlowDiagram, FlowRow, FlowNode, FlowArrow,
    StatCard, StatGrid,
    PropsTable,
    StatusBadge,
    KoreanLabel,
    PageMeta,
    ScreenMap, ScreenRegion, ScreenSubRegion, ScreenGroup, ScreenLabel, FileLink,
    // New
    Tabs, Tab,
    Modal,
    Accordion, AccordionItem,
    FeatureCard, FeatureGrid, QuickNav, QuickNavCard,
    StepGuide, Step,
    Hero, HeroBadge,
    Timeline, TimelineItem,
    Diagram, DiagramNode, DiagramArrow, DiagramRow, DiagramGroup, InfoBox,
    Tooltip, Compare, ProgressBar,
    ...components,
  }
}
