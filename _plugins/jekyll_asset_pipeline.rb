require 'japr'

module JAPR
  class SassConverter < JAPR::Converter
    require 'sass'

    def self.filetype
      '.scss'
    end

    def convert
      begin
        puts "Performing Sass Conversion."
        engine = Sass::Engine.new(@content, :syntax => :scss, :load_paths => ["./css/"])
        engine.render
      rescue StandardError => e
        puts "!!! SASS Error: " + e.message
      end
    end
  end
end
