export function ScrollIndicator() {
  return (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
      <div className="animate-bounce">
        <div className="w-6 h-10 border-2 border-viana-white rounded-full flex justify-center drop-shadow-lg">
          <div className="w-2 h-3 !bg-viana-orange rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  )
}
