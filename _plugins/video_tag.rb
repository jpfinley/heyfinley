# Title: Simple Video tag for Jekyll
# Author: John Finley after Brandon Mathis
# Description: Easily output MPEG4 HTML5 video.
#
# Syntax {% video url/to/video url/to/poster %}
#
# Example:
# {% video http://site.com/video.mp4 http://site.com/poster-frame.jpg %}
#
# Output:
# <video width='100%' preload='none' controls='controls' poster='http://site.com/poster-frame.jpg'>
#   <source src='http://site.com/video.mp4'/>
# </video>
#

module Jekyll

  class VideoTag < Liquid::Tag

    def initialize(name, path, tokens)
      super
      params = path.split
      @path = params[0]
      @poster = params[1] || ''
    end

    def render(context)
      source = "<p><video width='100%' preload='none' controls='controls' poster='#{@poster}'>"
      source +="<source src='#{@path}'/>"
      source += "</video></p>"
    end
  end
end

Liquid::Template.register_tag('video', Jekyll::VideoTag)
