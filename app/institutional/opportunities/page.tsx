"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ScrollIndicator } from "@/components/scroll-indicator"
import { useTranslation } from "@/components/translation-context"
import { Search, Grid3X3, List, MapPin, Calendar, Users, Eye, ChevronLeft, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"
import ptOpportunities from "@/locales/pt-PT/opportunities.json"
import enOpportunities from "@/locales/en-US/opportunities.json"

export default function opportunitiesPage() {
  const { t, locale } = useTranslation()
  const router = useRouter()

  const [selectedCountry, setSelectedCountry] = useState("All")
  const [selectedWorkModel, setSelectedWorkModel] = useState("All")
  const [searchText, setSearchText] = useState("")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [sortBy, setSortBy] = useState("recent")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const opportunitiesData = locale === "pt-PT" ? ptOpportunities : enOpportunities

  const opportunityKeys = [
    "softwareEngineer",
    "dataScientist",
    "productManager",
    "uxDesigner",
    "backendDeveloper",
    "mobileEngineer",
    "qaEngineer",
    "systemsArchitect",
    "cloudEngineer",
    "securityEngineer",
    "devopsEngineer",
    "frontendDeveloper",
  ]

  const opportunities = opportunityKeys.map((key) => ({
    id: opportunitiesData[`opportunities.${key}.id`],
    type: opportunitiesData[`opportunities.${key}.type`],
    title: opportunitiesData[`opportunities.${key}.title`],
    summary: opportunitiesData[`opportunities.${key}.summary`],
    description: opportunitiesData[`opportunities.${key}.description`],
    employmentType: opportunitiesData[`opportunities.${key}.employmentType`],
    seniorityLevel: opportunitiesData[`opportunities.${key}.seniorityLevel`],
    workplaceType: opportunitiesData[`opportunities.${key}.workplaceType`],
    companyLogo: "/logo.png",
    location: {
      city: opportunitiesData[`opportunities.location.${key}.city`],
      state: opportunitiesData[`opportunities.location.${key}.state`],
      country: opportunitiesData[`opportunities.location.${key}.country`],
      remote: opportunitiesData[`opportunities.location.${key}.remote`],
    },
    requirements: [
      opportunitiesData[`opportunities.${key}.requirements.0`],
      opportunitiesData[`opportunities.${key}.requirements.1`],
    ],
    responsibilities: [
      opportunitiesData[`opportunities.${key}.responsibilities.0`],
      opportunitiesData[`opportunities.${key}.responsibilities.1`],
    ],
    skills: [opportunitiesData[`opportunities.${key}.skills.0`], opportunitiesData[`opportunities.${key}.skills.1`]],
    languages: [
      opportunitiesData[`opportunities.${key}.languages.0`],
      opportunitiesData[`opportunities.${key}.languages.1`],
    ],
    benefits: [
      opportunitiesData[`opportunities.${key}.benefits.0`],
      opportunitiesData[`opportunities.${key}.benefits.1`],
    ],
    cultureFit: [
      opportunitiesData[`opportunities.${key}.cultureFit.0`],
      opportunitiesData[`opportunities.${key}.cultureFit.1`],
    ],
    postedAt: opportunitiesData[`opportunities.${key}.postedAt`],
    validUntil: opportunitiesData[`opportunities.${key}.validUntil`],
    applications: Math.floor(Math.random() * 50) + 1, // Random number for demo
  }))

  const filteredJobs = opportunities
    .filter((job) => selectedCountry === "All" || job.location.country === selectedCountry)
    .filter((job) => selectedWorkModel === "All" || job.workplaceType === selectedWorkModel)
    .filter(
      (job) =>
        searchText === "" ||
        job.title.toLowerCase().includes(searchText.toLowerCase()) ||
        job.location.city.toLowerCase().includes(searchText.toLowerCase()) ||
        job.location.country.toLowerCase().includes(searchText.toLowerCase()),
    )
    .sort((a, b) => {
      switch (sortBy) {
        case "recent":
          return new Date(b.postedAt).getTime() - new Date(a.postedAt).getTime()
        case "applications":
          return a.applications - b.applications
        case "workModel":
          return a.workplaceType.localeCompare(b.workplaceType)
        default:
          return 0
      }
    })

  const totalPages = Math.ceil(filteredJobs.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedJobs = filteredJobs.slice(startIndex, startIndex + itemsPerPage)

  useEffect(() => {
    setCurrentPage(1)
  }, [selectedCountry, selectedWorkModel, searchText, sortBy])

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString()
  }

  interface CardProps {
    service: {
      icon: React.ComponentType<any>
      title: string
      description: string
    }
    index: number
  }

  interface Opportunity {
    id: string
    type: string
    title: string
    summary: string
    description: string
    employmentType: string
    seniorityLevel: string
    workplaceType: string
    companyLogo: string
    location: {
      city: string
      state: string
      country: string
      remote: string
    }
    requirements: string[]
    responsibilities: string[]
    skills: string[]
    languages: string[]
    benefits: string[]
    cultureFit: string[]
    postedAt: string
    validUntil: string
    applications: number
  }
  interface OpportunityCardProps {
    opportunity: Opportunity
    index: number
  }

  return (
    <section className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section
        className="relative pt-0 pb-0 h-[600px]"
        style={{
          backgroundImage: "url(/pages/hero-opportunities.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 z-0" />
        <div className="container mx-auto px-4 relative z-10 h-full flex items-center justify-center">
          <div className="max-w-5xl mx-auto text-center bg-black/50 backdrop-blur-sm rounded-lg p-6">
            <h1 className="text-orange-400 text-orange-400 text-4xl lg:text-6xl font-bold mb-6 flex items-center justify-center">
              <Search className=" w-12 h-12 lg:w-16 lg:h-16" style={{ color: "#FFFFFF" }} />
              &nbsp;{t("opportunities.hero.title")}
            </h1>

            <p className="text-xl items-center justify-center mx-auto ">{t("opportunities.hero.subtitle")}</p>
          </div>
        </div>

        <ScrollIndicator />
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Search Filters */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8 w-4/5 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {/* Country Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
                <select
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                  <option value="All">All</option>
                  <option value="Brazil">Brazil</option>
                  <option value="Portugal">Portugal</option>
                  <option value="United States">United States</option>
                  <option value="Spain">Spain</option>
                  <option value="France">France</option>
                  <option value="Germany">Germany</option>
                  <option value="Italy">Italy</option>
                </select>
              </div>

              {/* Work Model Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Work Model</label>
                <select
                  value={selectedWorkModel}
                  onChange={(e) => setSelectedWorkModel(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                  <option value="All">All</option>
                  <option value="In-Person">In-Person</option>
                  <option value="Hybrid">Hybrid</option>
                  <option value="Remote">Remote</option>
                </select>
              </div>

              {/* Text Search */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
                <input
                  type="text"
                  placeholder="Search jobs or locations..."
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* Job Results */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div className="text-sm text-gray-600">
                  {filteredJobs.length} job{filteredJobs.length !== 1 ? "s" : ""} found
                  {filteredJobs.length > itemsPerPage && (
                    <span className="ml-2">
                      (Showing {startIndex + 1}-{Math.min(startIndex + itemsPerPage, filteredJobs.length)})
                    </span>
                  )}
                </div>

                {/* Sort By */}
                <div>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
                  >
                    <option value="recent">Most Recent</option>
                    <option value="applications">Least Applications</option>
                    <option value="workModel">Work Model</option>
                  </select>
                </div>
              </div>

              {/* View Toggle */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-md ${
                    viewMode === "grid" ? "bg-orange-500 text-white" : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                  }`}
                >
                  <Grid3X3 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-md ${
                    viewMode === "list" ? "bg-orange-500 text-white" : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                  }`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Job Results */}
            <div
              className={`grid gap-6 mb-6 ${
                viewMode === "grid" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"
              }`}
            >
              {paginatedJobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-6"
                >
                  <div className="flex flex-col h-full">
                    <div className="flex-grow">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{job.title}</h3>

                      <div className="flex items-center text-gray-600 mb-2">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span className="text-sm">
                          {job.location.country}, {job.location.city}
                        </span>
                      </div>

                      <div className="flex items-center justify-between mb-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            job.workplaceType === "Remote"
                              ? "bg-green-100 text-green-800"
                              : job.workplaceType === "Hybrid"
                                ? "bg-blue-100 text-blue-800"
                                : "bg-purple-100 text-purple-800"
                          }`}
                        >
                          {job.workplaceType}
                        </span>
                      </div>

                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          <span>Posted {formatDate(job.postedAt)}</span>
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          <span>{job.applications} applications</span>
                        </div>
                      </div>
                    </div>

                    <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                      <Eye className="w-4 h-4 mr-2" />
                      View Details
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="flex items-center"
                >
                  <ChevronLeft className="w-4 h-4 mr-1" />
                  Previous
                </Button>

                <div className="flex items-center space-x-1">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <Button
                      key={page}
                      variant={currentPage === page ? "default" : "outline"}
                      size="sm"
                      onClick={() => setCurrentPage(page)}
                      className={currentPage === page ? "bg-orange-500 hover:bg-orange-600" : ""}
                    >
                      {page}
                    </Button>
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="flex items-center"
                >
                  Next
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            )}

            {filteredJobs.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-500 text-lg mb-2">No jobs found</div>
                <div className="text-gray-400">Try adjusting your search filters</div>
              </div>
            )}
          </div>
        </div>
      </section>
    </section>
  )
}
