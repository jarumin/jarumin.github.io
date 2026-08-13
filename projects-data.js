const PROJECTS = [
  {
    id: 'meal-information-system',
    title: 'End-to-end M&E Information System',
    category: 'M&E Systems',
    image: 'meal-image3.png',
    shortDesc: 'A complete field-to-dashboard M&E pipeline covering indicator design, KoboToolbox data collection, data quality, database management, SQL indicators, and reporting.',
    tools: ['KoboToolbox', 'Python', 'pandas', 'SQLite', 'SQL', 'HTML', 'Chart.js'],
    githubUrl: 'https://github.com/jarumin/End-to-End-M-E-Information-System-',
    liveUrl: '#',
    overview: 'Most M&E portfolio pieces stop at a dashboard. This project shows the full chain an M&E team actually runs day to day: an indicator framework, field data collection forms, a data cleaning and validation process, a relational database, and an interactive dashboard that reports back against the original targets. The project is modeled on a dairy value chain farmer training programme across Adamawa, Taraba, and Kwara States.',
    features: [
      'Indicator framework with a results chain and ten-indicator matrix, including definitions, data sources, frequency, disaggregation, and targets.',
      'Three uploadable KoboToolbox XLSForms for baseline household registration, training attendance, and follow-up monitoring, with skip logic, constraints, and choice lists.',
      'A Python data-quality pipeline that handles duplicates, missing and out-of-range values, and orphaned records while documenting every cleaning decision.',
      'A relational SQLite database linking farmers, trainings, attendance, and follow-up tables, with SQL written directly against the indicator framework.',
      'A standalone HTML dashboard tracking indicators against targets with state-level filtering.'
    ],
    role: 'M&E systems design, data collection, data quality, database and dashboard build',
    report: {
      sections: [
        {
          heading: 'How it was built',
          items: [
            'Indicator framework: defined the results chain and ten-indicator matrix so every downstream data activity served a specific measurable indicator.',
            'Data collection forms: built three KoboToolbox XLSForms for baseline registration, training attendance, and follow-up monitoring.',
            'Raw data: processed 300 farmers, 55 training sessions, more than 1,000 attendance records, and 240 follow-up visits.',
            'Cleaning and validation: used Python to remove duplicates, flag or correct missing and out-of-range values, and drop records that could not be linked to a valid farmer; decisions were documented in a data-quality report.',
            'Database and indicators: loaded cleaned data into SQLite with linked farmers, trainings, attendance, and follow-up tables, then wrote SQL for the indicators.',
            'Dashboard: built a standalone HTML dashboard that tracks each indicator against its target and can be filtered by state.'
          ]
        },
        {
          heading: 'What the data shows',
          table: [
            ['Farmers registered', '300', '1,200'],
            ['Farmers trained', '291 (97%)', '80%'],
            ['Average milk yield, baseline to follow up', '5.1 to 7.2 l/day', '8 l/day'],
            ['Farmers reached with a follow-up visit', '80%', '75%'],
            ['Raw records cleaned across all three forms', '1,709 to 1,687', 'Less than 5% loss']
          ]
        },
        {
          heading: 'Skills demonstrated',
          items: [
            'M&E and indicator design — results chains and measurable indicator matrices with clear definitions, data sources, frequency, disaggregation, and targets.',
            'Data collection and field tools — uploadable KoboToolbox XLSForms with skip logic, constraints, and choice lists.',
            'Data cleaning and quality assurance — duplicates, missing values, out-of-range entries, and orphaned records handled with documented decisions.',
            'Data management and analysis — relational database design, SQL indicator calculations, and Python (pandas) data processing.',
            'Reporting and visualisation — a target-linked dashboard with state filters so the framework and dashboard remain connected.'
          ]
        }
      ],
      charts: [
        ['meal-image1.png', 'Farmers registered by state'],
        ['meal-image2.png', 'Training attendance rate by state against an 80% target'],
        ['meal-image3.png', 'Milk yield at baseline versus follow-up against an 8 litres/day target'],
        ['meal-image4.png', 'Practice adoption rate by state against a 60% target'],
        ['meal-image5.png', 'Farmer registrations by month'],
        ['meal-image6.png', 'Raw versus clean records across the three forms']
      ]
    }
  },
  {
    id: 'nigeria-health-nutrition-dashboard',
    title: 'Nigeria Health and Nutrition M&E Dashboard',
    category: 'Health & Nutrition',
    image: 'project-health-dashboard.jpg',
    shortDesc: 'A Power BI dashboard built on NDHS data, covering 20 health and nutrition indicators across national, zonal, state, North East, and trend views.',
    tools: ['Power BI', 'Power Query', 'DAX', 'Data Modeling'],
    githubUrl: 'https://github.com/jarumin/Nigeria-Health-Nutrition-Dashboard',
    liveUrl: '#',
    overview: 'This Power BI dashboard is built on Nigeria Demographic and Health Survey (NDHS) data, covering 20 health and nutrition indicators across seven domains, at national, zonal, and state level, for six survey rounds spanning 1990 to 2024. The analytical structure moves from national orientation to zone comparison, state deep-dive, North East focus, trends over time, and methodology.',
    features: [
      'National Overview with six KPI cards, a child-stunting choropleth map, domain ranking, and global Zone/SurveyYear slicers.',
      'Zone Comparison with six-zone rankings, small-multiple trends, and a 20-indicator by 6-zone conditional-formatting scorecard.',
      'State Deep-Dive with a state selector, 20-indicator KPI grid benchmarked against the state’s zone average, and same-zone comparison.',
      'North East Focus comparing the six North East states with national performance and linking social determinants to nutrition outcomes.',
      'Trends Over Time with an indicator selector driving a six-zone line chart across survey rounds, plus a DAX-based improvement comparison.',
      'Methodology and Data Dictionary page documenting source, survey years, indicator definitions, and the state/zone-level caveat.'
    ],
    role: 'M&E framework design, Power BI data modeling, ETL, DAX, visualisation and analytical framing',
    report: {
      sections: [
        {
          heading: 'How it was done',
          items: [
            'Loaded three core tables into Power BI: State-Zone lookup, Latest_State_2024, and Trend_Zone_AllYrs covering six survey rounds back to 1990.',
            'Built the relationship model using the State-Zone Map and filtered the trend table to state-level rows to avoid double-counting when zone and state values coexist.',
            'Corrected data types in Power Query before modeling, casting Value to Decimal Number and SurveyYear to Whole Number.',
            'Built six pages in sequence: National Overview, Zone Comparison, State Deep-Dive, North East Focus, Trends Over Time, and Methodology/Data Dictionary.',
            'Created reusable DAX measures for national average, zone average, change since baseline, and below-target flagging.',
            'Applied a consistent visual system with one colour per domain, a reserved North East highlight, and a repeated slicer design across pages.'
          ]
        },
        {
          heading: 'Skills demonstrated',
          items: [
            'Data modeling — multi-table relationship design and level-type filtering to prevent double-counting.',
            'Power Query / ETL — type correction at load rather than downstream.',
            'DAX — AVERAGEX with filter-context control, earliest/latest-year comparison logic, and conditional flagging.',
            'Information architecture — a six-page structure that moves from national to zonal to state to programme focus to trend to methodology.',
            'Data visualisation judgment — matching chart types to geographic spread, trajectories, scorecards, and print-ready briefs.',
            'M&E / sector framing — North East isolation and social-determinants analysis connecting fertility, family planning, and education to nutrition outcomes.',
            'Documentation — a dedicated methodology and data dictionary page with source, survey years, and the NDHS state/zone-level caveat.'
          ]
        },
        {
          heading: 'Recommendations from the build review',
          items: [
            'Label comparison bases clearly so year-over-year and zone-versus-national comparisons are not confused.',
            'Document the threshold used for the page 2 red/green conditional formatting.',
            'Label 2024 as the latest available survey round rather than implying an annual refresh.',
            'Check indicators with missing survey rounds before applying earliest-versus-latest DAX comparisons.',
            'Consider a one-page North East PDF export for donor-facing use.'
          ]
        }
      ]
    }
  },
  {
    id: 'project-management-dashboard',
    title: 'Project Management Dashboard',
    category: 'Program Management',
    image: 'pm-image3.png',
    shortDesc: 'An executive Excel dashboard for a large multi-phase infrastructure and value chain programme, linking activities, milestones, budgets, and delivery status.',
    tools: ['Excel', 'SUMIF', 'COUNTIFS', 'IFERROR', 'Data Validation', 'Native Charts'],
    githubUrl: 'https://github.com/jarumin/Project-Management-Dashboard',
    liveUrl: '#',
    overview: 'I was asked to build a project management dashboard for a large multi-phase infrastructure and value chain programme with a budget in the billions of naira. The programme had six phases, more than twenty major deliverables, seventeen milestones, and thirteen budget lines that needed to stay linked to real activity data.',
    features: [
      'Project Setup centralising core project fields and dropdown lists so phase, status, priority, and milestone options stay consistent.',
      'Activity Tracker capturing task ID, phase, assignee, priority, status, dates, estimated cost, actual cost, and budget reference code.',
      'Milestone Tracker covering seventeen major milestones with target dates, actual completion dates, status, and owner.',
      'Budget Tracker breaking the programme budget into thirteen components and calculating actual spend and remaining balance from task-level data.',
      'Executive Dashboard showing total tasks, completed tasks, percent complete, total budget, total spent, percent spent, task status, and planned-versus-actual budget burn.'
    ],
    role: 'Dashboard design, Excel architecture, project tracking and budget reconciliation setup',
    report: {
      sections: [
        {
          heading: 'Workbook architecture',
          items: [
            'Project Setup holds the core project fields and dropdown lists used across the workbook.',
            'Activity Tracker is the main task log, with standardised phase, priority, and status fields.',
            'Milestone Tracker sits above task level and tracks seventeen major milestones tied to programme phases.',
            'Budget Tracker breaks the total budget into thirteen components; actual spend pulls from the Activity Tracker using SUMIF and budget reference codes.',
            'Executive Dashboard is a one-page summary driven entirely by formulas linked to the four working sheets.'
          ]
        },
        {
          heading: 'How it was built',
          items: [
            'Formula driven, not hardcoded: COUNTIFS, SUMIF, and IFERROR keep summary numbers live as the Activity Tracker changes.',
            'Cross-sheet architecture links the working sheets and dashboard into one connected reporting system.',
            'Data validation standardises phase, status, priority, and milestone-status entries.',
            'Budget reconciliation links every task to one of thirteen budget components without duplicate data entry.',
            'Visual reporting converts tracker data into KPI scorecards and charts that a donor, board member, or programme lead can read quickly.'
          ]
        },
        {
          heading: 'Skills demonstrated',
          items: [
            'Advanced Excel formula work — SUMIF, COUNTIFS, IFERROR, and cross-sheet referencing.',
            'Dashboard and KPI design for programme reporting.',
            'Data validation and standardisation for clean data entry.',
            'Budget tracking and reconciliation logic.',
            'Multi-sheet workbook architecture for MEAL and programme management use cases.',
            'Data visualisation using native Excel chart tools.'
          ]
        }
      ],
      charts: [
        ['pm-image3.png', 'Executive dashboard with task completion and budget burn charts'],
        ['pm-image1.png', 'Activity Tracker — task-level project data'],
        ['pm-image2.png', 'Milestone Tracker — programme milestone data']
      ]
    }
  },
  {
    id: 'power-sector-analysis',
    title: "Nigeria's Electricity Market in 2025",
    category: 'Energy & Power',
    image: 'power-sector-atcc-loss.png',
    shortDesc: 'A 2025 Nigerian power-sector analysis examining generation utilisation, DisCo commercial performance, ATC&C losses, and grid stability.',
    tools: ['Python', 'pandas', 'CSV', 'Data Analysis', 'Data Visualisation'],
    githubUrl: 'https://github.com/jarumin/Power-Sector-Analysis',
    liveUrl: '#',
    overview: "This project analysed Nigeria's power-sector performance in 2025 using NERC's four Quarterly NESI Reports. The analysis focused on the gap between installed and used generation capacity, DisCo commercial performance, and whether the national grid was becoming more stable.",
    features: [
      'Structured DisCo energy-offtake data covering 11 DisCos across all four quarters of 2025.',
      'DisCo billing, collection, and ATC&C-loss analysis to compare commercial performance across the market.',
      'Quarterly analysis of national offtake performance, collection efficiency, and ATC&C loss.',
      'Full-year DisCo ranking showing the wide gap between the strongest and weakest performers.',
      'Grid-stability review covering transmission losses and system disturbances.'
    ],
    role: 'Data transcription, cleaning, analysis, performance benchmarking and visualisation',
    report: {
      sections: [
        {
          heading: 'How it was built',
          items: [
            "Used NERC's Q1 to Q4 2025 Quarterly NESI Reports as the source material.",
            'Built two structured datasets: DisCo energy offtake performance, and DisCo billing, collection, and ATC&C loss.',
            'Transcribed performance tables into structured CSVs with one row per DisCo per quarter across 11 DisCos.',
            'Analysed quarterly performance, full-year averages, commercial efficiency, and grid-stability indicators.',
            'Generated decision-useful charts to compare national trends and DisCo-level performance.'
          ]
        },
        {
          heading: 'Key findings',
          items: [
            'Installed capacity was around 13,625 MW, while actual dispatch remained at 39–40% throughout the year, leaving roughly 60% of built capacity idle in a typical quarter.',
            'National DisCo offtake performance fell from 97.73% in Q1 to 86.43% in Q3, before partially recovering to 89.31% in Q4.',
            'Collection efficiency rose from 74.39% in Q1 to 80.70% in Q3 before slipping to 79.35% in Q4, while ATC&C loss moved in the opposite direction.',
            'Full-year average ATC&C loss ranged from 17.10% at Eko to 70.03% at Kaduna.',
            'Transmission loss improved from 9.00% in Q1 to 7.27% in Q4, close to the 7.00% regulatory target.'
          ]
        },
        {
          heading: 'Tools used',
          items: [
            'NERC Quarterly NESI Reports (Q1–Q4 2025).',
            'Structured CSV data preparation, data cleaning and transcription.',
            'Correlation analysis and chart generation.'
          ]
        }
      ],
      charts: [
        ['power-sector-offtake.png', 'National DisCo offtake performance by quarter, 2025'],
        ['power-sector-commercial.png', 'National collection efficiency versus ATC&C loss by quarter'],
        ['power-sector-atcc-loss.png', 'Full-year average ATC&C loss ranked by DisCo']
      ]
    }
  },
  {
    id: 'world-cup-expansion-analysis',
    title: '2026 World Cup Expansion Analysis',
    category: 'Sports Analytics',
    image: 'world-cup-overall-gpg.png',
    shortDesc: 'A match-level analysis of the expanded 48-team World Cup, examining goal output, upset patterns, and group-stage competitiveness.',
    tools: ['Python', 'pandas', 'Jupyter Notebook', 'Data Analysis', 'Data Visualisation'],
    githubUrl: 'https://github.com/jarumin/2026-World-Cup-Expansion-Analysis',
    liveUrl: '#',
    overview: 'This project analysed real match-level data from the expanded 48-team 2026 World Cup to answer three questions: how goal output changed by stage, how FIFA ranking gaps predicted upsets, and whether the larger group stage became more or less competitive.',
    features: [
      'Tournament-level and stage-level goals-per-game analysis comparing 2014, 2018, 2022, and 2026.',
      'Upset-rate analysis by FIFA ranking gap, with explicit rules for defining an upset.',
      'Group-stage match-character analysis using draw rate, close matches, blowouts, and average goal difference.',
      'Ranking-gap analysis showing how team-quality differences varied by match margin.',
      'A reproducible workflow covering sourcing, verification, cleaning, joining, analysis, visualisation, and documentation.'
    ],
    role: 'Data sourcing, verification, cleaning, analytical rule design, statistical analysis and visualisation',
    report: {
      sections: [
        {
          heading: 'How it was built',
          items: [
            'Scoped three falsifiable questions before analysing the data.',
            'Used two public datasets, cleaned and joined them into structured CSV files containing match-level and ranking information.',
            'Verified the data against known tournament facts before building the analysis.',
            'Defined reproducible rules for concepts such as upset and competitiveness.',
            'Built purpose-specific visualisations and documented the workflow, sources, methodology and limitations in a README and Jupyter notebook.'
          ]
        },
        {
          heading: 'Key findings',
          items: [
            'Overall goals per game rose to 2.96 in 2026, compared with 2.64–2.69 in 2014, 2018 and 2022.',
            'The 2026 group stage reached 2.99 goals per game, above the 2.50–2.83 range in previous tournaments.',
            'Upset likelihood varied systematically with the FIFA ranking gap; the largest upset highlighted was Norway (44th) defeating Brazil (6th) in the round of 16.',
            'The expanded group stage became more polarised: draw and blowout rates both increased while close one-goal matches declined.',
            'Blowout matches had an average FIFA ranking gap of 40.3 points, above the tournament average.'
          ]
        },
        {
          heading: 'Tournament comparison',
          headers: ['Year','Matches','Goals','Goals per game'],
          table: [
            ['2014', '64 matches', '171 goals', '2.67 goals/game'],
            ['2018', '64 matches', '169 goals', '2.64 goals/game'],
            ['2022', '64 matches', '172 goals', '2.69 goals/game'],
            ['2026', '104 matches', '308 goals', '2.96 goals/game']
          ]
        }
      ],
      charts: [
        ['world-cup-overall-gpg.png', 'Overall tournament goals per game, 2014–2026'],
        ['world-cup-gpg-stage.png', 'Goals per game by stage, stages common to both formats'],
        ['world-cup-upsets.png', 'Upset rate by FIFA ranking gap, 2026 World Cup'],
        ['world-cup-group-character.png', 'Group stage match character, 2014–2026'],
        ['world-cup-rank-gap-margin.png', 'Average FIFA ranking gap by group stage match margin, 2026']
      ]
    }
  },
  {
    id: 'vaccination-outbreak-analysis',
    title: 'Vaccination Coverage vs. Disease Outbreak',
    category: 'Public Health Analytics',
    image: 'vaccination-dashboard.png',
    shortDesc: 'An Excel-based analysis of WHO/UNICEF immunisation coverage and measles surveillance data across 194 countries and six WHO regions, 2010–2024.',
    tools: ['Excel', 'SUMIFS', 'COUNTIFS', 'INDEX/MATCH', 'Data Cleaning', 'Dashboard Design'],
    githubUrl: 'https://github.com/jarumin/VaccinationOutbreakAnalysis',
    liveUrl: '#',
    overview: 'An Excel dashboard analysing fifteen years of WHO/UNICEF immunisation coverage data and WHO measles surveillance data across 194 countries and six WHO regions. The analysis examines progress toward the 95% coverage target, COVID-era changes, and the relationship between coverage drops and later measles incidence.',
    features: [
      'Clean country and regional panel datasets covering 2010–2024, with missing values preserved as blanks.',
      'Formula-driven summary tables using SUMIFS, COUNTIFS and INDEX/MATCH instead of static pivot tables.',
      'Coverage-gap analysis against the 95% DTP3 and MCV1 targets.',
      'Regional analysis of the COVID-era coverage drop and subsequent recovery.',
      'Lagged country-year analysis testing whether coverage drops were followed by measles case increases.'
    ],
    role: 'Data profiling, Excel modelling, public-health analysis, dashboard design and quality assurance',
    report: {
      sections: [
        {
          heading: 'How it was built',
          items: [
            'Profiled entity codes to separate 194 genuine countries from six WHO regions and other aggregates.',
            'Built clean country and regional panel tables spanning 2010–2024.',
            'Used hidden composite keys combining ISO code and year so each lookup remained unambiguous.',
            'Built formula-driven summaries for each analytical question and connected the dashboard to those summaries.',
            'Applied explicit threshold and flag logic and performed recalculation and visual QA after each build stage.'
          ]
        },
        {
          heading: 'Key findings',
          items: [
            'Global DTP3 and MCV1 coverage remained around 84–85%, close to 2010 levels and below the 95% target.',
            'In 2024, 66 of 194 countries reached 95% DTP3 coverage and 69 reached 95% MCV1 coverage.',
            'DTP3 coverage fell by an average of 3.5 percentage points across the six WHO regions between 2019 and 2021, with uneven recovery by 2024.',
            'Among 2,716 country-year observations, 21.2% of coverage drops of 5 points or more were followed by a measles case increase within one to two years, compared with 25.2% where no such drop occurred.',
            'The lagged result was treated cautiously as a limitation of a one-country, one-year lag test rather than evidence that vaccination coverage does not matter.'
          ]
        },
        {
          heading: 'Regional DTP3 trend',
          headers: ['WHO Region','DTP3 2019','DTP3 2021','DTP3 2024','Net Change 2019 to 2024'],
          table: [
            ['Africa', '76%', '73%', '76%', '0 pp'],
            ['Americas', '84%', '81%', '86%', '+2 pp'],
            ['Eastern Mediterranean', '84%', '81%', '79%', '-5 pp'],
            ['Europe', '95%', '94%', '93%', '-2 pp'],
            ['South-East Asia', '91%', '83%', '92%', '+1 pp'],
            ['Western Pacific', '95%', '92%', '92%', '-3 pp']
          ]
        }
      ],
      charts: [
        ['vaccination-dashboard.png', 'Vaccination Coverage vs. Disease Outbreak dashboard from the summary report']
      ]
    }
  }
];

function getProjectById(id) {
  return PROJECTS.find(function (p) { return p.id === id; });
}
