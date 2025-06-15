import React, { useState } from 'react';
import { Search, FileText, Star, ArrowRight, X, Eye } from 'lucide-react';
import { documentTemplates, getPopularTemplates, searchTemplates } from '../utils/templates';
import { Template, TemplateCategory } from '../types/Template';

interface TemplateSelectorProps {
  isVisible: boolean;
  onClose: () => void;
  onSelectTemplate: (template: Template) => void;
  currentLanguage: string;
}

const TemplateSelector: React.FC<TemplateSelectorProps> = ({
  isVisible,
  onClose,
  onSelectTemplate,
  currentLanguage
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('popular');
  const [previewTemplate, setPreviewTemplate] = useState<Template | null>(null);

  const popularTemplates = getPopularTemplates();
  const searchResults = searchQuery ? searchTemplates(searchQuery) : [];

  const getDisplayTemplates = (): Template[] => {
    if (searchQuery) {
      return searchResults;
    }
    
    if (selectedCategory === 'popular') {
      return popularTemplates;
    }
    
    const category = documentTemplates.find(c => c.id === selectedCategory);
    return category ? category.templates : [];
  };

  const handleTemplateSelect = (template: Template) => {
    onSelectTemplate(template);
    onClose();
  };

  const handlePreview = (template: Template, e: React.MouseEvent) => {
    e.stopPropagation();
    setPreviewTemplate(template);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className={`bg-white rounded-2xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden transform transition-all duration-300 ease-out ${
        isVisible ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-4'
      }`}>
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="flex items-center space-x-3">
            <FileText className="h-8 w-8 text-blue-600" />
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Document Templates</h2>
              <p className="text-sm text-gray-600">Choose from professional templates to get started quickly</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
            title="Close Templates"
          >
            <X className="h-6 w-6 text-gray-500" />
          </button>
        </div>

        <div className="flex h-[calc(90vh-120px)]">
          {/* Sidebar with slide-in animation */}
          <div className={`w-80 border-r border-gray-200 bg-gray-50 transform transition-transform duration-300 ease-out ${
            isVisible ? 'translate-x-0' : '-translate-x-full'
          }`}>
            {/* Search */}
            <div className="p-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search templates..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Categories */}
            <div className="px-4 pb-4">
              <div className="space-y-1">
                <button
                  onClick={() => {
                    setSelectedCategory('popular');
                    setSearchQuery('');
                  }}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-colors flex items-center space-x-2 ${
                    selectedCategory === 'popular'
                      ? 'bg-blue-100 text-blue-700'
                      : 'hover:bg-gray-100 text-gray-700'
                  }`}
                >
                  <Star className="h-4 w-4" />
                  <span>Popular Templates</span>
                  <span className="ml-auto text-xs bg-blue-500 text-white px-2 py-1 rounded-full">
                    {popularTemplates.length}
                  </span>
                </button>

                {documentTemplates.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => {
                      setSelectedCategory(category.id);
                      setSearchQuery('');
                    }}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors flex items-center space-x-2 ${
                      selectedCategory === category.id
                        ? 'bg-blue-100 text-blue-700'
                        : 'hover:bg-gray-100 text-gray-700'
                    }`}
                  >
                    <span className="text-lg">{category.icon}</span>
                    <div className="flex-1">
                      <div className="font-medium">{category.name}</div>
                      <div className="text-xs text-gray-500">{category.description}</div>
                    </div>
                    <span className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded-full">
                      {category.templates.length}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content with slide-in animation */}
          <div className={`flex-1 overflow-y-auto transform transition-transform duration-300 ease-out delay-100 ${
            isVisible ? 'translate-x-0' : 'translate-x-full'
          }`}>
            {previewTemplate ? (
              /* Template Preview */
              <div className="h-full flex flex-col">
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{previewTemplate.name}</h3>
                    <p className="text-sm text-gray-600">{previewTemplate.description}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleTemplateSelect(previewTemplate)}
                      className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <span>Use Template</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => setPreviewTemplate(null)}
                      className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
                    >
                      <X className="h-5 w-5 text-gray-500" />
                    </button>
                  </div>
                </div>
                <div className="flex-1 p-6 bg-gray-50">
                  <div className="bg-white rounded-lg shadow-sm p-6 h-full overflow-y-auto">
                    <pre className="whitespace-pre-wrap font-mono text-sm text-gray-800 leading-relaxed">
                      {previewTemplate.content}
                    </pre>
                  </div>
                </div>
              </div>
            ) : (
              /* Template Grid */
              <div className="p-6">
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {searchQuery ? `Search Results (${searchResults.length})` : 
                     selectedCategory === 'popular' ? 'Popular Templates' :
                     documentTemplates.find(c => c.id === selectedCategory)?.name}
                  </h3>
                  {!searchQuery && selectedCategory !== 'popular' && (
                    <p className="text-sm text-gray-600">
                      {documentTemplates.find(c => c.id === selectedCategory)?.description}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {getDisplayTemplates().map((template, index) => (
                    <div
                      key={template.id}
                      className={`bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all duration-200 cursor-pointer group transform ${
                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                      }`}
                      style={{ transitionDelay: `${index * 50}ms` }}
                      onClick={() => handleTemplateSelect(template)}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                            {template.name}
                          </h4>
                          <p className="text-sm text-gray-600 mb-3">
                            {template.description}
                          </p>
                        </div>
                        {template.isPopular && (
                          <Star className="h-4 w-4 text-yellow-500 fill-current flex-shrink-0 ml-2" />
                        )}
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-1">
                          {template.tags.slice(0, 2).map((tag) => (
                            <span
                              key={tag}
                              className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                          {template.tags.length > 2 && (
                            <span className="text-xs text-gray-400">
                              +{template.tags.length - 2}
                            </span>
                          )}
                        </div>
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={(e) => handlePreview(template, e)}
                            className="p-1 hover:bg-gray-100 rounded transition-colors"
                            title="Preview Template"
                          >
                            <Eye className="h-4 w-4 text-gray-500" />
                          </button>
                          <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {getDisplayTemplates().length === 0 && (
                  <div className="text-center py-12">
                    <FileText className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No templates found</h3>
                    <p className="text-gray-600">
                      {searchQuery ? 'Try adjusting your search terms' : 'No templates available in this category'}
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateSelector;