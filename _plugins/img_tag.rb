# Title: Simple Image tag for Jekyll
# Author: John Finley
# Description: Custim wrapper for IMG tags to support lazy laoding.
#
# Syntax {% image url/to/img This is the alt text %}
#
# Example:
# {% image ../assets/img/portfolio/center-stage-review-1.jpg Center Stage Review 1 %}
#
# Output:
# <img data-layzr="../assets/img/portfolio/center-stage-review-1.jpg" alt="Center Stage Review 1">
#

module Jekyll

  class ImageTag < Liquid::Tag

    def initialize(name, path, tokens)
      super
      params = path.split
      @path = params[0]
      @alt = alt = params.drop(1).join(' ') || ''
    end

    def render(context)
      source = "<p><img data-layzr='#{@path}' alt='#{@alt}'></p>"
    end
  end
end

Liquid::Template.register_tag('image', Jekyll::ImageTag)
